// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Post from "App/Models/Post";

export default class PostsController {

  async index({}: HttpContext) {
    let allPosts = await Post.all();
    return allPosts
  }

  async store({request}: HttpContext) {
    const myData = request.only(['title', 'content'])

    const postagem = Post.create(myData);
    return postagem;
  }
}
