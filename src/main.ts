import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入移动端ui
// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
// Vue.use(MuseUI);

// 引入pc端ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { locale } from './lang/en';

Vue.use(ElementUI, { locale });

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

Vue.config.productionTip = false;

const isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
  navigator.userAgent
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
