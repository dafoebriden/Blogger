<template>
    <div class="container">
        <section v-if="blog" class="row">
            <div class="col-12">
                <img src="" alt="">
            </div>
        </section>
        <section v-for="blog in blogs" class="row blog">
            <div class="col-8">
                <div class="d-flex align-items-center mt-2">
                    <button @click="setActiveBlog()" class="btn btn-primary" role="button" data-bs-toggle="modal"
                        data-bs-target="#BlogModal">Open</button>
                </div>
                <div>
                    <p class=" fw-bold m-0 px-3 pt-2">{{ blog.title }}</p>
                    <p class="blog-body px-2 m-0 ">{{ blog.body }}</p>
                </div>
            </div>
            <div class="col-4 p-0">
                <img class="img-fluid post-img" :src="blog.imgUrl" :alt="blog.title">
            </div>
        </section>
    </div>
</template>


<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profileService } from '../services/ProfileService.js'
import { blogsService } from '../services/BlogsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'
import BlogCard from '../components/BlogCard.vue'
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                logger.log('Id form route parameters', profileId)
                await profileService.getProfileById(profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        async function getBlogsByCreatorId() {
            try {
                const profileId = route.params.profileId;
                await blogsService.getBlogsByCreatorId(profileId);
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            getProfileById()
            getBlogsByCreatorId()
        });
        return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs)
        }
    },
    components: { BlogCard }
}
</script>


<style lang="scss" scoped>
.post-img {
    height: 20vh;
    width: 100%;
}

.blog-body {
    height: 15vh;
    width: fit-content;
    overflow: hidden;

}
</style>