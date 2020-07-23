/**
 * 集中管理系统内状态
 * lingdu 2020-07-22
 * 例如管理员姓名、头像等
 * 作为后台系统，其实可用的地方并不多，如果改变权限或用户信息，最好是强制退出重新登录。
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    getters
})

export default store
