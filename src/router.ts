import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';

import Home from './views/home/index.vue';

import Admin from './views/admin/index.vue';
import adminRouter from './views/admin/admin-router';

import TourService from './views/tourService/index.vue';
import serviceRouter from './views/tourService/tourService-router';

Vue.use(Router);

const baseRouter = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/tour_service',
      component: TourService,
      children: serviceRouter
    },
    {
      path: '/admin',
      meta: { requireAuth: true },
      component: Admin,
      children: adminRouter
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

baseRouter.beforeEach((to: any, from: any, next: any) => {
  const auth = Cookies.get('auth');
  const requireAuth = to.matched.some((res: any) => res.meta.requireAuth);
  if (requireAuth && auth !== 'admin') {
    Message({
      message: '无访问权限',
      type: 'error'
    });
  } else {
    next();
  }
});

export default baseRouter;
