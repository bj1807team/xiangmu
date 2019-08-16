import axios from 'axios';
// 设置默认访问路径
axios.defaults.baseURL = "http://localhost:4503"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// 获取首页内容
export let shouApi = (data) => {
    return axios.request({
        url: `/shou?id=${data}`,
        method: 'get',

    })
}

// 获取首页详情内容
export let xiangqingApi = (data,id) => {
    return axios.request({
        url: `/xiang?page=${data}&id=${id}`,
        method: 'get',
    })
}