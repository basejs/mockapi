# mockapi
简易的MockServer+api文档服务

#启动方式
1. 安装nodejs
2. 执行npm install
3. 执行npm run dev
4. 执行npm start
5. 访问localhost:3001

#使用手册
1. config／errcode.js 用于书写错误码，按规则填写即可
2. config／apilist.js 用于遍历，每个接口对应一个 key->value 比如 userlist：用户列表， 按示范填写即可
3. api／xxxx.js 则是接口文档，注意xxx对应上一步的 apilist.js中的 key ，需要一致，比如userlist ，这里文件名则为userlist.js
4. api／xxx.js参数说明：title：接口地址，name：中文名，methods：请求方式，req：请求参数，res：返回参数
