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
// 对实际请求进行设置
app.get('/list', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080') // 只允许指定域名http://localhost:8080的请求
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
// Access-Control-Allow-Origin
app.get('/origin', (ctx, next) => {
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080') // 只允许指定域名http://localhost:8080的请求
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:8081') // 只允许指定域名http://localhost:8081的请求
  ctx.set('Access-Control-Allow-Origin', '*') // 设置为通配符允许所有域的请求
  ctx.body = {
    message: 'Access-Control-Allow-Origin设置成功',
    code: 200
  }
})
// Access-Control-Expose-Headers
app.get('/exposeHeaders', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Expose-Headers', 'X-Expose-Headers') // 未开启时浏览器无法获取自定义的请求头
  ctx.set('X-Expose-Headers', 'I am custom header')
  ctx.body = {
    message: 'Access-Control-Expose-Headers设置成功',
    code: 200
  }
})
// Access-Control-Allow-Methods 要对预检请求设置
app.options('/allowMethods', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Methods', 'PUT')
  ctx.status = 200
})
// 实际请求
app.put('/allowMethods', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.body = {
    message: 'Access-Control-Allow-Methods设置成功',
    code: 200
  }
})

export default app
