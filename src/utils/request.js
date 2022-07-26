// 引入axios
import axios from 'axios'
// 调用axios方法
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/', // 基础路径
  timeout: 5000, // 超时时间
  headers: { 'Content-Type': 'application/json' }// 请求头
})

export default request
