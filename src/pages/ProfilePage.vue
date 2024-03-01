<template v-if="profile">
    <div>
        <div class="container-fluid m-0 p-0">
            <section class="row p-0 m-0">
                <div class=" col-12 d-flex align-items-center justify-content-center mt-2">
                    <img class="profile-img rounded-circle me-3" :src="profile.picture" :alt="profile.name">
                    <h1>{{ profile.name }}</h1>
                </div>
            </section>
        </div>
        <div class="container">
            <section v-for="blog in blogs" class="row blog m-2">
                <div class="col-8 height">
                    <div class="selectable mt-2 rounded" @click="setActiveBlog()" role="button" data-bs-toggle="modal"
                        data-bs-target="#BlogModal">
                        <p class=" fw-bold m-0 px-3 pt-2">{{ blog.title }}</p>
                        <p class="blog-body px-2 m-0 ">{{ blog.body }}</p>
                    </div>
                </div>
                <div class="col-4 p-0">
                    <img class="img-fluid post-img" :src="blog.imgUrl" :alt="blog.title">
                </div>
            </section>
        </div>
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
    border-top-right-radius: 2.2em;
    border-bottom-right-radius: 2.2em;
    margin-left: 1px;
}

.cover-img {
    object-fit: contain;
    object-position: center;
}

.profile-img {
    height: 15vh;
    width: 15vh;

}

.blog-body {
    height: 10vh;
    width: fit-content;
    overflow: hidden;
}

.height {
    height: 20vh;
}

.blog {
    border: 10px solid black;
    border-radius: 3em;

}
</style>