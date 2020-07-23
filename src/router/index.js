/** 
 * 路由配置
 * lingdu 2020-07-21
 * 静态基础路由在此配置如登录页、404、无权限等
 * 要想搞复杂一点，就在这里拆一堆，然后各种组合，加入各种验证。
 */


import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/index.vue'
import Layout from '../layout/index.vue'

Vue.use(Router)

//基础路由
export const baseRoutes=[
    {
        name:"login",
        path:"/login",
        component:Login
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
          }]
      }
];

const createRouter = () => new Router({
    // mode: 'history', 
    scrollBehavior: () => ({ y: 0 }),
    routes: baseRoutes
  });
  
const router = createRouter();

export default router;
