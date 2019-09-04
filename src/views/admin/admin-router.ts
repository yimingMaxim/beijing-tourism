import Tour from './tour/tour.vue';
import Bus from './tour/bus.vue';
import NightShow from './tour/nightShow.vue';
import Order from './order/order.vue';

const adminRouter = [
  {
    path: '',
    redirect: 'tour'
  },
  {
    path: 'tour',
    name: 'tour',
    component: Tour
  },
  {
    path: 'bus',
    name: 'bus',
    component: Bus
  },
  {
    path: 'nightShow',
    name: 'nightShow',
    component: NightShow
  },
  {
    path: 'order',
    name: 'order',
    component: Order
  }
];

export default adminRouter;
