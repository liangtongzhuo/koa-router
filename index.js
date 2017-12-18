
var Koa = require('koa')
var Router = require('./lib/router') // koa-router

var app = new Koa()
var router = new Router()

router.get('/', function (ctx, next) {
  ctx.body="hello world"
})

app.use(router.routes())

app.listen(3000 ,_ = console.log('3000 启动了 :)'))


//lib 内有详细注释和 log，纠结半天最后开始把英文注释删除
//删除一些样列代码。