<template>
  <div class="container">
    <div class="row blog rounded my-2" v-for="blog in blogs" :key="blog.id">
      <div class="col-8">
        <div class="d-flex align-items-center mt-2">
          <img class="profile-img rounded-circle me-3" :src="blog.creatorPicture" :alt="blog.creatorName">
          <h3>{{ blog.creatorName }}</h3>
        </div>
        <div>
          <p class=" fw-bold m-0 px-3 pt-2">{{ blog.title }}</p>
          <p class="blog-body px-2 m-0 ">{{ blog.body }}</p>
        </div>
      </div>
      <div class="col-4 p-0">
        <img class="img-fluid post-img" :src="blog.imgUrl" :alt="blog.title">
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'

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
  }
}
</script>

<style scoped lang="scss">
.column {
  columns: 1;
  column-gap: 1;
}

.post-img {
  height: 20vh;
  width: 100%;
}

.profile-img {
  height: 5vh;
}

.blog-body {
  height: 15vh;
  width: fit-content;
  overflow: scroll;

}

.blog {
  border: 5px solid black;
  border-radius: 5em;

}
</style>
