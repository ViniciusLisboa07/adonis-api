// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";

export default class PostsController {

  index({}: HttpContext) {
    return {it:'Works'}
  }

  store({}: HttpContext) {
    return {it:'Also Works'}
  }
}
