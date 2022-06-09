'use strict'
/**
 * 处理成功响应
 *
 * @param {*} [res=null] 需要返回的数据
 * @param {string} [msg='success'] 提示语
 */
function success(res = null, msg = 'success') {
  this.ctx.status = 200;
  this.ctx.body = {
    code: 0,
    data: res,
    msg,
  };
}
/**
 * 处理失败响应
 *
 * @param {*} [res=null] 需要返回的数据
 * @param {string} [msg='服务异常'] 提示语
 */
function fail(res = null, msg = '服务异常') {
  this.ctx.status = 500;
  this.ctx.body = {
    code: 1,
    data: res,
    msg,
  };
}
module.exports = { success, fail }
