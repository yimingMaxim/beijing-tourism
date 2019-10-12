import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';

import Home from './views/home/home.vue';
import Admin from './views/admin/index.vue';
import List from './views/list/index.vue';
import TourDetail from './views/detail/index.vue';
import TourOrder from './views/order/tourOrder/tourOrder.vue';

import listRouter from './views/list/list-router';
import adminRouter from './views/admin/admin-router';

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
      path: '/list',
      component: List,
      children: listRouter
    },
    {
      path: '/tour_detail/:tourId',
      name: 'tourDetail',
      component: TourDetail
    },
    {
      path: '/tour_order/:tourId',
      name: 'tourOrder',
      component: TourOrder
    },
    {
      path: '/admin',
      meta: { requireAuth: true },
      component: Admin,
      children: adminRouter
    }
  ]
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
