import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BlogsService {
    async getBlogs() {
        const response = await api.get('api/blogs')
        logger.log('Got Blogs', response.data)
        const newBlogs = response.data.map(pojo => new Blog(pojo))
        AppState.blogs = newBlogs
    }
    async getBlogsByCreatorId(profileId) {
        const response = await api.get(`api/blogs?creatorId=${profileId}`)
        logger.log('Got blogs', response.data)
        const newBlogs = response.data.map(pojo => new Blog(pojo))
        AppState.blogs = newBlogs
    }
    setActiveBlog(blog) {
        AppState.activeBlog = blog
    }
}

export const blogsService = new BlogsService()