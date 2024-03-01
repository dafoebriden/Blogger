<template>
  <div class="container">
    <div class="row blog my-2" v-for="blog in blogs" :key="blog.id">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import BlogCard from '../components/BlogCard.vue'

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)

      }
    }
    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs),
    }
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.blog {
  border: 10px solid black;
  border-radius: 3em;

}

.container {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
