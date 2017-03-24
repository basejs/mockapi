<template>
    <div class="index_wrap">
        <div class="in_wrap">
            <h2 class="page-header">启动方式</h2>
            <p>1.安装nodejs</p>
            <p>2.执行npm install</p>
            <p>3.执行npm run dev</p>
            <p>4.执行npm start</p>
            <p>5.访问localhost:3001</a></p>
        </div>

        <div class="in_wrap in_wrap2">
            <h2 class="page-header">使用手册</h2>
            <p>1.config／errcode.js 用于书写错误码，按规则填写即可</p>
            <p>2.config／apilist.js 用于遍历，每个接口对应一个 key->value  比如 userlist：用户列表， 按示范填写即可</p>
            <p>3.api／xxxx.js 则是接口文档，注意xxx对应上一步的 apilist.js中的 key ，需要一致，比如userlist ，这里文件名则为userlist.js</p>
            <p>4.api／xxx.js参数说明：title：接口地址，name：中文名，methods：请求方式，req：请求参数，res：返回参数</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    
}
</script>
<style lang="less">
   .in_wrap {
        width:80%;
        overflow:hidden;
        margin:0 auto;
        background:#fff;
        border-top:5px solid #2196f3;
        border-radius:4px;
        padding:25px;
        margin-bottom:30px;
        margin-top:30px;
        box-shadow:0 0 10px #999;
        p {
            font-size:16px;
            line-height:24px;
            margin-top:10px;
            a {
                color:#2196f3;
            }
        }
   }
   .page-header {
        font-size:18px;
        font-weight:100;
        margin:25px 0 10px;
    }
    .in_wrap2 {
        border-top:5px solid #4caf50;
    }
</style>