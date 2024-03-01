<template>
    <div class="col-8 height">
        <div class="d-flex align-items-center mt-2">
            <router-link :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
                <img class="profile-img rounded-circle me-3 selectable " role="button" :src="blog.creatorPicture"
                    :alt="blog.creatorName">
            </router-link>
            <h3>{{ blog.creatorName }}</h3>
        </div>
        <div class="selectable mt-2 rounded" @click="setActiveBlog()" role="button" data-bs-toggle="modal"
            data-bs-target="#BlogModal">
            <p class=" fw-bold m-0 px-3 pt-2">{{ blog.title }}</p>
            <p class="blog-body px-2 m-0 ">{{ blog.body }}</p>
        </div>
    </div>
    <div class="col-4 p-0">
        <img class="img-fluid post-img" :src="blog.imgUrl" :alt="blog.title">
    </div>
</template>


<script>
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';

export default {
    props: {
        blog: { type: Blog, required: true }
    },
    setup(props) {
        return {
            setActiveBlog() {
                logger.log(props.blog)
                blogsService.setActiveBlog(props.blog)
            }
        }
    }
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

.profile-img {
    height: 5vh;
    width: 5vh;
}

.blog-body {
    height: 8vh;
    width: fit-content;
    overflow: hidden;
}

.height {
    height: 20vh;
    margin-left: 2;
}
</style>