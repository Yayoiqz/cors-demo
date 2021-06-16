<template>
  <div class="wrap">
    <h1>预检请求</h1>
    <ul class="request">
      <li>
        <button
          class="call-request"
          @click="callOption"
        >
          点我看预检请求|Allow-Headers
        </button>
      </li>
    </ul>
    <h1>携带身份凭证</h1>
    <ul class="request">
      <li>
        <button
          class="call-request"
          @click="callSetCredit"
        >
          能够setCookie的请求
        </button>
      </li>
      <li>
        <button
          class="call-request"
          @click="callWithCredit"
        >
          发个带cookie的请求
        </button>
      </li>
    </ul>
    <h1>响应头设置</h1>
    <ul class="request">
      <li>
        <button
          class="call-request"
          @click="callAllowOrigin"
        >
          Access-Control-Allow-Origin
        </button>
      </li>
      <li>
        <button
          class="call-request"
          @click="callExposeHeaders"
        >
          Access-Control-Expose-Headers
        </button>
      </li>
      <li>
        <button
          class="call-request"
          @click="callAllowMethods"
        >
          Access-Control-Allow-Methods
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      instance: null
    }
  },
  created () {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000'
    })
  },
  methods: {
    callOption () {
      this.instance.get('/demo/list', { headers: { 'X-Custom-Header': 'foobar' } }).then(res => {
        console.log(res.data)
      }).catch(e => {
        console.log(e)
      })
    },
    callSetCredit () {
      this.instance.get('/demo/setCredit', { withCredentials: true }).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },
    callWithCredit () {
      this.instance.get('/demo/withCredit', { withCredentials: true }).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },
    callAllowOrigin () {
      this.instance.get('/demo/origin').then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },
    callExposeHeaders () {
      this.instance.get('/demo/exposeHeaders').then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },
    callAllowMethods () {
      this.instance.put('/demo/allowMethods').then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style scoped>
.wrap {
  padding-left: 20px
}
h1 {
  text-align: left;
}
.request li{
  list-style: none;
  margin-bottom: 20px;
  text-align: left;
}
.call-request {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.call-request:hover {
  color: #fff;
  background-color: #66b1ff;
  border-color: #66b1ff;
}
</style>
