import Router from 'koa-router'

const app = new Router({
  prefix: '/demo'
})
// 对预检请求进行设置
app.options('/list', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Headers', 'X-Custom-Header')
  ctx.status = 200
})
// get /list
app.get('/list', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080') // 只允许指定域名http://localhost:8080的请求
  ctx.set('Access-Control-Allow-Headers', 'X-Custom-Header')
  ctx.body = {
    data: [{
      id: 1,
      name: '张三',
      gender: '汉'
    }, {
      id: 2,
      name: '李四',
      gender: '汉'
    }],
    message: '获取列表成功',
    code: 200
  }
})
// 设置Cookie
app.get('/setCredit', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080') // 只允许指定域名http://localhost:8080的请求
  // ctx.set('Access-Control-Allow-Origin', '*') // 设置为通配符请求会失败
  ctx.set('Access-Control-Allow-Credentials', true) // 未设置则浏览器不会返回请求内容
  ctx.cookies.set('username', 'JOJO', {
    maxAge: 1000 * 60 * 60 * 1,
    expires: new Date('2022-07-01'),
    httpOnly: false,
    overwrite: false
  })
  ctx.body = {
    message: 'set cookie成功',
    code: 200
  }
})
// 发送Cookie
app.get('/withCredit', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080') // 只允许指定域名http://localhost:8080的请求
  // ctx.set('Access-Control-Allow-Origin', '*') // 设置为通配符请求会失败
  ctx.set('Access-Control-Allow-Credentials', true) // 未设置则浏览器不会返回请求内容
  ctx.body = {
    message: '发送cookie成功',
    code: 200
  }
})

export default app
