const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    try {
        const response = await fetch('https://api.steampowered.com/...'); // Update with Steam API URL
        const emotes = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ emotes })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch emotes' })
        };
    }
};