<template>
    <div class="badges">
        <div class="grid-container">
            <!-- Loop through items and display them in the grid -->
            <div class="grid-item" v-for="badge in badges" :key="badge.id">
                <img :src="badge.imageUrl" :alt="badge.name" />
                <p>{{ badge.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            badges: []  //Initialize an empty array to store the badges
        };
    },
    async mounted() {
        try {
            const response = await fetch('/.netlify/functions/getBadges');
            const data = await response.json();
            this.badges = data.badges.map(badge => ({
                id: badge.badgeid,
                name: badge.name,
                imageUrl: badge.image_url //Update based on actual API response
            }));
        } catch (error) {
            console.error('Error fetching badges:', error);
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

