import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class BlogsService {
    async getBlogs() {
        const response = await api.get('api/blogs')
        logger.log('Got Blogs', response.data)
        const newBlogs = response.data.map(pojo => new Blog(pojo))
        AppState.blogs = newBlogs
    }
    constructor() {


    }
}

export const blogsService = new BlogsService()