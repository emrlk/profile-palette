const fetch = require('node-fetch');

exports.handler = async (event) => {
    const apiKey = process.env.ACHSTATS_KEY;
    const badgeIdsUrl = `https://api.achievementstats.com/badges/?key=${apiKey}`;

    try {
        // Fetch badge IDs
        const response = await fetch(badgeIdsUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const badgeIds = await response.json();

        // Fetch badge details
        const badgeDetails = await Promise.all(badgeIds.map(async (badgeId) => {
            const detailUrl = `https://api.achievementstats.com/badges/${badgeId}?key=${apiKey}`;
            const detailResponse = await fetch(detailUrl);
            if (!detailResponse.ok) {
                throw new Error('Network response was not ok');
            }
            return detailResponse.json();
        }));

        return {
            statusCode: 200,
            body: JSON.stringify(badgeDetails),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching badges' }),
        };
    }
};