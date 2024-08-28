
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
    const badgeIdsUrl = `https://api.achievementstats.com/badges/?key=${process.env.ACHSTATS_KEY}`;
    let badgeDetails = [];

    try {
        // Fetch badge IDs
        const response = await fetch(badgeIdsUrl);

        if (!response.ok) {
            const errorText = await response.text(); // Log the response text
            console.error(`Failed to fetch badge IDs: ${response.status} ${response.statusText} - ${errorText}`);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: `Failed to fetch badge IDs: ${response.status} ${response.statusText}` })
            };
        }

        const badgeIds = await response.json();

        if (!Array.isArray(badgeIds)) {
            console.error('Invalid response format:', badgeIds);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid response format' })
            };
        }

        // Fetch details for each badge ID
        const badgePromises = badgeIds.map(async badgeId => {
            const url = `https://api.achievementstats.com/badges/${badgeId}/?key=${process.env.ACHSTATS_KEY}`;
            try {
                const badgeResponse = await fetch(url);
                if (!badgeResponse.ok) {
                    const badgeErrorText = await badgeResponse.text(); // Log the response text
                    console.error(`Failed to fetch badge ${badgeId}: ${badgeResponse.status} ${badgeResponse.statusText} - ${badgeErrorText}`);
                    return null;
                }
                return await badgeResponse.json();
            } catch (error) {
                console.error('Error fetching badge details:', error);
                return null;
            }
        });

        badgeDetails = await Promise.all(badgePromises);
        badgeDetails = badgeDetails.filter(detail => detail !== null);

    } catch (error) {
        console.error('Error fetching badge IDs:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch badge IDs or details' })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(badgeDetails)
    };
};