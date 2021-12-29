// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Post from "App/Models/Post";

export default class PostsController {

  async index({}: HttpContext) {
    let allPosts = await Post.all();
    return allPosts
  }

  store({}: HttpContext) {
    return {it:'Also Works'}
  }
}
