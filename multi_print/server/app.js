//4第一个helloworld
const koa = require("koa");

let app = new koa();

let router = require('koa-router')();
var cors = require('koa2-cors');

/*
 通过一个中间件，把所有的工具关联起来
*/
app.use(async (ctx, next) => {
    //挂载到util中
    ctx.util = {
      mysql: require('./mysql')
    }
    await next()
  })

  router.get('/', async (ctx, next) => {
    await ctx.util.mysql(`select * from print_order`).then((res) => {
      console.log(res);
      ctx.body = res;//返回给前端的数据
    })
    await next()
  })

  //4配置路由,必须加
app
.use(cors())
.use(router.routes()) //配置路由
.use(router.allowedMethods()); //建议配置：作用：可以根据ctx.status设置response响应头

app.listen(3000);