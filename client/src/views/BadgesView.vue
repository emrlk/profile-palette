<template>
    <div class="badges">
        <div class="grid-container">
            <div class="grid-item" v-for="(badge, index) in displayedBadges" :key="index">
                <img :src="badge.image" alt="Badge Image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            badges: [],
            displayedBadges: [],   // Badges currently displayed
            batchSize: 50,         // Number of badges to load per batch
            startIndex: 0,         // Index of the next batch to load
            loading: false         // Flag to prevent multiple loads
        };
    },
    async mounted() {
        window.addEventListener('scroll', this.handleScroll);
        await this.loadBadges();
    },
    methods: {
        async loadBadges() {
            if (this.loading) return;
            this.loading = true;

            try {
                const response = await fetch('/.netlify/functions/getBadges');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const badgeDetails = await response.json();

                //Update badges array if empty
                if (this.badges.length === 0) {
                    this.badges = badgeDetails.map(badge => ({
                        id: badge.id,
                        image: `https://achievementstats.com/${badge.image}`
                    }));
                }

                //Append the next batch of badges to displayedBadges
                const newBadges = this.badges.slice(this.startIndex, this.startIndex + this.batchSize);
                this.displayedBadges = [...this.displayedBadges, ...newBadges];
                this.startIndex += this.batchSize; // Update startIndex for next batch

                //Check if page is tall enough to scroll, otherwise
                // load more badges
                this.$nextTick(() =>{
                    if(document.documentElement.scrollHeight <= 
                        window.innerHeight && this.startIndex <
                        this.badges.length){
                            this.loadBadges();
                        }
                });

            } catch (error) {
                console.error('Error fetching badges:', error);
            } finally {
                this.loading = false;
            }
        },
        handleScroll() {
            const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

            console.log('Scroll Position:', window.scrollY);
            console.log('Document Height:', document.documentElement.scrollHeight);
            console.log('Near Bottom:', nearBottom);

            if (nearBottom && !this.loading && this.startIndex < this.badges.length) {
                this.loadBadges();
            }
        }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.badges {
    padding: 0.5rem;
    position: relative;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
}

.grid-item {
    background: transparent;
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