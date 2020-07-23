/**
 * 配置相关接口
 * lingdu 2020-7-22
 * 配置登录相关的一些接口，比如登录，获取用户信息，退出啥的
 * 只是配置一些接口地址和提交方式等参数
 */
import {default as service} from './httpAxios'

export function login(params) {
    console.log("正在调用接口"+params);
    return service({
        url:'/ramcome/mytest',
        method:"post",
        params
    })
}
export function getInfo() {
  
}
export function logout() {
  
}