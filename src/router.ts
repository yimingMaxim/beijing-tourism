import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/main.vue';
import Detail from './views/detail.vue';

import mainRouter from './views/main/main.router';

Vue.use(Router);

export default new Router({
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
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
});
