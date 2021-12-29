// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext, Response } from "@adonisjs/core/build/standalone";
import Post from "App/Models/Post";

export default class PostsController {

  async index({}: HttpContext) {
    let allPosts = await Post.all();
    return allPosts
  }

  async store({request}: HttpContext) {
    const myData = request.only(['title', 'content'])

    const postagem = await Post.create(myData);
    return postagem;
  }

  async update({params, request, response}: HttpContext) {
    const { id } = params;
    const myPost = await Post.find(id);

    if(!myPost){
      response.notFound();
    } else {
      const myData = request.only(['title', 'content'])
      myPost.merge(myData);
      await myPost.save();
      return myPost;
    }
  }

  async show({params, response}){
    const post_id = params.id
    const post = await Post.find(post_id)

    if(!post) {
      response.notFound();
    }

    return post;
  }

  async destroy({ params, response }) {
    const { id } = params;
    const post = await Post.find(id);

    if (!post) {
      return response.notFound();
    }

    await post.delete()
    return post
  }
}
