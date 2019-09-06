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
    name: 'tourAdmin',
    component: Tour
  },
  {
    path: 'bus',
    name: 'busAdmin',
    component: Bus
  },
  {
    path: 'nightShow',
    name: 'nightShowAdmin',
    component: NightShow
  },
  {
    path: 'order',
    name: 'order',
    component: Order
  }
];

export default adminRouter;
