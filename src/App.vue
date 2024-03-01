<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
  <BlogModal :blog="blog" />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import BlogModal from './components/BlogModal.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      profile: computed(() => AppState.activeProfile),
      blog: computed(() => AppState.activeBlog)
    }
  },
  components: { Navbar, BlogModal }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
