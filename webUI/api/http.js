/*
  *@Name: http request
 * @Author: miaoqiang 
 * @Date: 2018-10-10 16:40:09 
 * @Last Modified by: miaoqiang
 * @Last Modified time: 2018-10-10 17:04:03
 */
const app = getApp();

const request = (url, options) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: `${app.globalData.host}${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        'x-token': 'x-token',  // 看自己是否需要
        success(request) {
          resolve(request.data);
        },
        fail(error) {
          reject(error.data);
        }
      },
    })
  })
}

const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
  return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return request(url, { method: 'DELETE', data: options })
}

module.exports = {
  get,
  post,
  put,
  remove
}