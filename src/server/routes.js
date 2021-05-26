import Router from 'koa-router'

const app = new Router({
  prefix: '/demo'
})
// get方法
app.get('/list', (ctx, next) => {
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
// 图片上传demo

export default app
