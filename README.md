# mockapi
简易的MockServer+api文档服务
此服务利用nodejs+vue搭建，无数据库连接，可以当做假数据接口服务使用也可以单独作为api接口文档使用。
ui代码copy自我朋友的项目 [ShuangRen-doc](https://github.com/ShuangRen/ShuangRen-doc), 特别感谢一下。

# 启动方式
1. 安装nodejs
2. 执行npm install
3. 执行npm run dev
4. 执行npm start
5. 访问localhost:3001

# 使用手册

## 客户端
1. config／errcode.js 用于书写错误码，按规则填写即可
2. config／apilist.js 用于遍历，每个接口对应一个 key->value 比如 userlist：用户列表， 按示范填写即可
3. api／xxxx.js 则是接口文档，注意xxx对应上一步的 apilist.js中的 key ，需要一致，比如userlist ，这里文件名则为userlist.js
4. api／xxx.js参数说明：title：接口地址，name：中文名，methods：请求方式，req：请求参数，res：返回参数

## 服务端
1. /config.js 可以配置apiServer(真实接口地址)、type(请求方式)
2. type有三个值可选，默认为default。 
  *   default先请求真实接口，没有数据时请求mock接口
  *   mock只请求mock接口
  *   real只请求真实接口

