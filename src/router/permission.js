/**
 * 使用路由拦截进行权限控制
 * lingdu 2020-07-21
 * 对路由进行拦截后，根据用户权限增加动态路由，即后台系统菜单。
 * 权限验证有多种方式，可以每一次都调用后端接口询问权限
 * 还可以把所有权限在登录后存储到前端缓存里
 * 反正安全性还得靠后端保障
 */


import router from '../router'

router.beforeEach(async(to, from, next) => {
    console.log(to.path);
    console.log("已拦截");
    next();
});
  
router.afterEach(() => {
    console.log("拦截后");
})