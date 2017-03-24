<template>
  <div class="apiView_wrap">
    <div class="top_req">
      <h1 class="name">{{items.title}}</h1>
      <p class="title">{{items.name}}</p>
      <h2 class="page-header">[{{items.methods}}]请求参数</h2>
      <table class="req_table">
        <tr v-for="(name,text) in items.req">
          <td width="20%">{{name}}</td>
          <td width="80%">{{text}}</td>
        </tr>
      </table>
      <h2 class="page-header">返回参数</h2>
      <pre class="pre" v-html="items.res"></pre>
    </div>
    <div class="top_req middle_req">
      <h2 class="page-header">Request</h2>
      <template v-for="(index,item) in inputdata">
        <h4 class="form-head">{{items.req[index]}} ({{index}})</h4>
        <input type="text" class="inputtext" v-model="item">
        <br/>
      </template>
      <input type="button" class="send_btn" value="send" @click="apiSend" />
    </div>
    <div class="top_req bottom_req">
      <h2 class="page-header">Response</h2>
      <pre class="pre" v-html="response"></pre>
    </div>
  </div>
</template>
<script>
import '../lib/prism/prism';
export default {
  data: () => ({
    apiname: '',
    response: ''
  }),
  props: ['items', 'inputdata'],
  route: {
    canReuse: false, //此组件不能被重用,每次必然重新加载
  },
  created() {
    this.apiname = this.$route.params.any;
    this.$dispatch('leftItem', this.apiname);
  },
  attached() {
    setTimeout(() => {
      this.items.res = Prism.highlight(JSON.stringify(this.items.res, null, 2),Prism.languages.json);
    }, 100);
  },
  methods: {
    apiSend() {
      let query = this.inputdata;
      let method = this.items.methods.toLowerCase();
      if(method === 'get'){
        query = {params: query};
      }
      this.$http[method](this.items.title, query).then(res => {
        this.response = Prism.highlight(JSON.stringify(res, null, 2),Prism.languages.json);
      }, res => {
        let result = {
          "status": res.status,
          "statusText": res.statusText,
          "body": res.body
        };
        this.response = Prism.highlight(JSON.stringify(result, null, 2),Prism.languages.json);
      });
    }
  }
}
</script>
<style lang="less">
@import '../lib/prism/prism.css';
.apiView_wrap {
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 40px;
}

.pre {
  overflow: hidden;
  padding: 25px 50px;
  background: #F5F5F5;
  border: 1px solid #dcdcdc;
  text-align: left;
  line-height: 24px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.pre_4 {
  margin-left: 20px;
  display: inline-block;
}

.pre_3 {
  margin-left: 15px;
  display: inline-block;
}

.top_req {
  overflow: hidden;
  background: #fff;
  border-top: 5px solid #2196f3;
  border-radius: 4px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 0 10px #999;
  .name {
    font-size: 24px;
    font-weight: 100;
  }
  .title {
    font-size: 18px;
    color: #999;
  }
  .page-header {
    font-size: 18px;
    font-weight: 100;
    margin: 25px 0 10px;
  }
  .req_table {
    width: 80%;
    border: 1px solid #dcdcdc;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 20px;
    tr {
      width: 100%;
      td {
        border: 1px solid #dcdcdc;
        height: 36px;
        text-indent: 25px;
      }
    }
  }
}

.middle_req {
  border-top: 5px solid #4caf50;
  .inputtext {
    width: 60%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-indent: 10px;
  }
  .page-header {
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 30px;
    font-size: 24px;
    color: #333;
  }
  .form-head {
    font-weight: 100;
    font-size: 16px;
    color: #666;
    margin: 15px 0 5px;
  }
  .send_btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #4caf50;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      background: #2E8932
    }
    &:active {
      background: #155D18
    }
  }
}

.bottom_req {
  border-top: 5px solid #ffeb3b;
}
</style>
