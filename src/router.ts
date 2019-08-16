import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

import Main from './views/main.vue';
import Detail from './views/detail.vue';

import mainRouter from './views/main/main.router';

Vue.use(Router);

const baseRouter = new Router({
  routes: [
    {
      path: '',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      children: mainRouter
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { requiresAuth: true },
      component: Detail
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
});

baseRouter.beforeEach((to, from, next) => {
  if (Cookies.get('userNo')) {// 判断是否缓存中有userNo，这是一个工号，没有跳回登录页
    if (to.matched.some(res => res.meta.requiresAuth)){
     // 此处是根据我在路由中添加的meta.requiresAuth属性，
     // 若访问的页面中有我这项属性，那么当用户直接访问该页面时，会进入此项判断。
     // 下面我要在这里判断，用户访问的to.path，跟我菜单中的path是否一致，
     // 若一致，那么该登录者可以访问此页面，
     // 若不一致，将跳出登录页，或提示用户无权限访问该页面
     let menuListStatus = store.state.menuListStatus;// 接口返回可以访问的菜单，存储在vuex中
     let menuList = store.state.menuList;// 根据返回的菜单跟我路由中配置好的router数组做处理，把不需要展示的菜单过滤掉，存储在vuex中
     if (menuListStatus && menuListStatus.length != 0) {
       if (menuList && menuList.length != 0) {
         let isMenu = deepQuery(menuList,to.path);
         if (isMenu) {// 若存在，继续访问
           next();
         } else {
           Message({
                              message: '无权限访问',
                              type: "warning"
                          });
                          next('/');
         }
       } else {
         next();
       }
     } else {
       next();
     }
   } else {// 若没上面的判断，说明是访客组就可以访问的页面
     next();
   }

 } else {
   next({ path: '/'})
 }
})

export default baseRouter;
