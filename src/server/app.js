import Koa from 'koa'
import nodeRoutes from './routes'

var app = new Koa()

app.on('close', function (err) {
  console.error(err)
})
app.use(nodeRoutes.routes())
app.use(nodeRoutes.allowedMethods())

app.listen(3000, function () {
  console.info('listen on port:', 3000)
})
export default app
