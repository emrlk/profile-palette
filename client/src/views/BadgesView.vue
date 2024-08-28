<template>
    <div class="badges">
        <div class="grid-container">
            <div class="grid-item" v-for="badge in badges" :key="badge.id">
                <p>{{ badge.name }}</p>
                <p>Stages: {{ badge.numOfStages }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            badges: []  // Initialize an empty array to store the badges
        };
    },
    async mounted() {
        try {
            // Fetch badge details from serverless function
            const response = await fetch('/.netlify/functions/getBadges');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            
            const badgeDetails = await response.json();
            this.badges = badgeDetails.map(badge => ({
                id: badge.badgeId,
                name: badge.name,
                numOfStages: badge.numOfStages // Include additional details as needed
            }));
        } catch (error) {
            console.error('Error fetching badges in BadgesView:', error);
        }
    }
};
</script>

<style scoped>
.badges {
    padding: .5rem;
    padding-right: 0%;
    position: relative;
    overflow: hidden;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    max-height: 100vh;
    overflow-y: auto;
}

.grid-item {
    background: #666666;
    border-radius: 0px;
    overflow: hidden;
    text-align: center;
    width: 100px;
    height: 100px;
}

.grid-item img {
    width: 100%;
    height: 100%;
}
</style>

