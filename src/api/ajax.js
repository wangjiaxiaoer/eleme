// ajax请求函数
// 返回值：promise对象（异步返回的的数据是response.data）
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return Promise(function (resolve, reject, ) {
        let promise
        if (type === 'GET') {
            // 准备urlquery参数数据
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}