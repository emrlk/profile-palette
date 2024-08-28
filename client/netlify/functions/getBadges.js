const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
    const badgeIdsUrl = `https://api.achievementstats.com/badges?key=${process.env.ACHSTATS_KEY}`;
    let badgeDetails = [];

    try {
        // Fetch badge IDs
        const response = await fetch(badgeIdsUrl);
        const badgeIds = await response.json();

        if (!Array.isArray(badgeIds)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid response format' })
            };
        }

        // Fetch details for each badge ID
        const badgePromises = badgeIds.map(async badgeId => {
            const url = `https://api.achievementstats.com/badges/${badgeId}?key=${process.env.ACHSTATS_KEY}`;
            try {
                const badgeResponse = await fetch(url);
                return await badgeResponse.json();
            } catch (error) {
                console.error('Error fetching badge details:', error);
                return null; // Or handle error accordingly
            }
        });

        badgeDetails = await Promise.all(badgePromises);
        badgeDetails = badgeDetails.filter(detail => detail !== null); // Remove null entries

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