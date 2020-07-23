/**
 * api请求拦截进行相关全局设置
 * lingdu 2020-07-22
 * 可以采用以下几种方式对提交和响应进行拦截，加入一些需要加入的东西
 * 比如token之类的，但是前后端分离情况下，安全性并不会得到更好的保障
 * 代理跨越请求还需要加一些额外的东西，比如/api那种代码
 * 里面测试地址，只是为了证明可以通，但是不要乱用，个人服务器很脆弱的。
 */

import axios from 'axios'
//import Qs from 'qs'

const service = axios.create({
    //baseURL: process.env.APP_BASE_API, 
    baseURL: "http://cloud.imgrids.com", //该地址仅仅用于测试
   // withCredentials: true, //异步请求带cookie包含在请求中 (true 时 Access-Control-Allow-Origin 不能为 *)
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },// 响应格式 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType:"json"
})
/** 
 * 在请求数据发送到服务器之前对其进行更改
 * 例如加入token等操作或者序列化参数等操作
 */ 
// service.transformRequest = [
// 	function (aData, aConfig) {
// 		if (aData == undefined) {
// 			aData = {}
// 		}
// 		if (!aConfig['Content-Type']) return Qs.stringify(aData)

// 		switch (aConfig['Content-Type'].toLowerCase()) {
// 			case 'application/json;charset=utf-8': {
// 				return JSON.stringify(aData)
// 			}

// 			case 'multipart/form-data;charset=utf-8': {
// 				let oFormData = new FormData()
// 				for (let _Key in aData) {
// 					oFormData.append(_Key, aData[_Key])
// 				}
// 				return oFormData
// 			}

// 			default: {
// 				return Qs.stringify(aData)
// 			}
// 		}
// 	}
// ];
service.interceptors.request.use(
    config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
        return config;
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(

    response => {
        const res = response.data

        // // if the custom code is not 20000, it is judged as an error.
        // if (res.code !== 20000) {

        //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            
        //   }
        //   return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        return res
        // }
    },
    error => {
        console.log('err' + error) 

        return Promise.reject(error)
    }
)

export default service
