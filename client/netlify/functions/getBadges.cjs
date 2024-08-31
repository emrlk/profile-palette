/* eslint-disable no-undef */
const https = require('https');

const ACHSTATS_KEY = process.env.ACHSTATS_KEY;

function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
            
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error('Error parsing JSON'));
                }
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
}

exports.handler = async function(event, context) {
    const { limit = 50, offset = 0 } = event.queryStringParameters || {};

    try {
        const appIdsUrl = `https://api.achievementstats.com/badges/?key=${ACHSTATS_KEY}`;
        const data = await fetchJson(appIdsUrl);

        const appIds = data.appIds;
        const badgePromises = appIds.slice(offset, offset + limit).map(async appId => {
            const badgesUrl = `https://api.achievementstats.com/games/${appId}/badges/?key=${ACHSTATS_KEY}`;
            const badges = await fetchJson(badgesUrl);

            return badges.map(badge => ({
                appId: appId,
                image: badge.image,
            }));
        });

        const badgeDetails = await Promise.all(badgePromises);
        const flattenedBadgeDetails = badgeDetails.flat();

        return {
            statusCode: 200,
            body: JSON.stringify(flattenedBadgeDetails),
        };
    } catch (error) {
        console.error('Error fetching badges:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch badge details' }),
        };
    }
};
