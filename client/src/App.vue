<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Logo from './components/LogoItem.vue';
import Title from './components/TitleItem.vue';
</script>

<template>
  <header class="sticky-header">
    <div class="wrapper">
      <Logo></Logo>
      <Title class="gradient-right" msg="Profile Palette"/>
      <h3 class="subheading">Steam Item Smart Searcher</h3>
      <nav>
        <RouterLink to="/emotes">Emotes</RouterLink>
        <RouterLink to="/backgrounds">Backgrounds</RouterLink>
        <RouterLink to="/badges">Badges</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 40px;
  text-align: left;
  margin-top: 2rem;
  font-weight: bold;

}

nav a.router-link-exact-active {
  color: #FFA732;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid var(--color-border);

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: var(--section-gap);
    flex-direction: column;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
