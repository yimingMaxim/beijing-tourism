import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/main.vue';
import Detail from './views/detail.vue';

import mainRouter from './views/main/main.router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: mainRouter
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
});
