<template>
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
</template>


<script>
import { Blog } from '../models/Blog';

export default {
    props: {
        blog: { type: Blog, required: true }
    },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.post-img {
    height: 20vh;
    width: 100%;
}

.profile-img {
    height: 5vh;
    width: 5vh;
}

.blog-body {
    height: 15vh;
    width: fit-content;
    overflow: hidden;

}
</style>