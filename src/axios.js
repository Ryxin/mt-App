import axios from 'axios';


// axios 拦截器  在发送请求前做一些处理一些重复耦合的配置。
axios.interceptors.request.use(config => {
    config.baseURL = 'https://open.duyiedu.com' // 配置请求的基础域名
    config.params = { // 配置参数
        ...config.params, // 把你传的数据也放进去，而不是直接覆盖
        appkey: "renyongxin_1568536418045",
    }
    return config;
})

export default axios;