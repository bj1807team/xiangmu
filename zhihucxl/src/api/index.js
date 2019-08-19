import axios from 'axios';
import jsonp from 'jsonp'
// 设置默认访问路径
axios.defaults.baseURL = "http://192.168.45.77:4503"

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

//百度接口
export const getBaidu = ({ value }) => {
    return new Promise((resolve, reject) => {
        jsonp('http://suggestion.baidu.com/su?wd=' + value, { param: "cb" }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

// 首页登录成功数据

export const gitHomes = ()=>{
    return axios.request({
        url:'/denghome',
        method: 'get',
    })
}