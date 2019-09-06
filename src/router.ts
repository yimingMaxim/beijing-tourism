import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';

import Main from './views/main/index.vue';
import List from './views/list/index.vue';
import Admin from './views/admin/index.vue';
// import Detail from './views/detail.vue';

import listRouter from './views/list/list-router';
import adminRouter from './views/admin/admin-router';

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
    },
    {
      path: '/list',
      component: List,
      children: listRouter
    },
    {
      path: '/admin',
      // meta: { requireAuth: true },
      component: Admin,
      children: adminRouter
    }
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
