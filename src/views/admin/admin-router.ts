import GroupTour from './tour/groupTour.vue';
// import PrivateTour from './tour/privateTour.vue';
import Bus from './tour/bus.vue';
import NightShow from './tour/nightShow.vue';
import Order from './order/order.vue';

const adminRouter = [
  {
    path: '',
    redirect: 'group'
  },
  {
    path: 'group',
    name: 'group',
    component: GroupTour
  },
  {
    path: 'private',
    name: 'private',
    component: GroupTour
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
