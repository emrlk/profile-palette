<template>
  <div class="backgrounds">
    <Spinner v-if="loading" />
    <div class="grid-container">
      <!-- Loop through items and display them in the grid -->
      <div class="grid-item" v-for="item in backgrounds" :key="item.id">
        <img :src="item.imageUrl" :alt="item.name" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/SpinnerItem.vue';
export default {
  components:{
        Spinner
    },
  data() {
    return {
      backgrounds: [
        // Example static items, replace with API data
        // fetch items from the Steam API in mounted()
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 2, name: "Background 2", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 3, name: "Background 3", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/1920/1080" },

      ]
    };
  }
};
</script>

<style scoped>
.backgrounds {
  padding: .5rem;
  padding-right: 0%;
  position: relative;
  overflow: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: .5rem;
  max-height: 100vh;
  overflow-y: auto; /* Enable vertical scrolling */
}

.grid-item {
  background: #666666;
  border-radius: 0px; 
  overflow: hidden;
  text-align: center;
  width: 350px;
  height: 230px;
}

.grid-item img {
  width: 100%;
  height: 100%;
}

.grid-item p {
  margin: 0.5rem 0.5;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
