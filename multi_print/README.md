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

运行项目：
0. 打开server/mysql.js里面有本地mysql配置
1. cmdg到server文件夹
2. npm i (需要先安装Node.js)
3. node app.js
4. 双击index.html，等1到2s, 点击 “打印”按钮

效果如下：
![打印电子面单](/multi_print/效果图/打印面单效果图.png)

