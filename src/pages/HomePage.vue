<template>
  <div class="container">
    <div class="row blog rounded my-2 selectable" role="button" v-for="blog in blogs" :key="blog.id"
      data-bs-toggle="modal" data-bs-target="#BlogModal">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import BlogCard from '../components/BlogCard.vue'
import BlogModal from '../components/BlogModal.vue'

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
  components: { BlogCard, BlogModal }
}
</script>

<style scoped lang="scss">
.blog {
  border: 5px solid black;
  border-radius: 5em;

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
