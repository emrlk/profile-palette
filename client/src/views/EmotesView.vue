<template>
  <div class="emotes">
    <Spinner v-if="loading" />
    <div class="grid-container">
      <!-- Loop through items and display them in the grid -->
      <div class="grid-item" v-for="item in emotes" :key="item.id">
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
      emotes: [
        // Example static items, replace with API data
        // fetch items from the Steam API in mounted()
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
        { id: 1, name: "Background 1", imageUrl: "https://picsum.photos/200/200" },
      ]
    };
  }
};
</script>

<style scoped>
.emotes {
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
