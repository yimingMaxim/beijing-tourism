import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';

import Main from './views/main/index.vue';
// import Detail from './views/detail.vue';

// import mainRouter from './views/main/main.router';

Vue.use(Router);

const baseRouter = new Router({
  routes: [
    {
      path: '',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
      // children: mainRouter
    }
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   meta: { requireAuth: true },
    //   component: Detail
    // }
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: Detail
    // }
  ]
});

baseRouter.beforeEach((to, from, next) => {
  const auth = Cookies.get('auth');
  const requireAuth = to.matched.some(res => res.meta.requireAuth);
  if (requireAuth && !auth) {
    Message({
      message: '无访问权限',
      type: 'error'
    });
  } else {
    next();
  }
});

export default baseRouter;
