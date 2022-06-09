'use strict'

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this
    const result = await service.home.index()
    ctx.helper.success(result)
  }
}

module.exports = HomeController;
