# multi_print
lodop 批量打印电子面单

批量打印电子面单的一个解决方案

后台koa2 + router + cors + mysql
前台ajax + lodop 

逻辑
前台发请求，请求数据，koa2 router得到请求后，从数据库获取数据后返回

注，后台代码里面已经做了跨域处理

这个是为公司项目里面，解决批量打印电子面单的方案，可以移植到vue上，无非是修改下lodop的引用方式

思路都差不多，一通百通，举一反三 

附 vue集合lodop打印(转)
https://www.jianshu.com/p/d288963c1a80
