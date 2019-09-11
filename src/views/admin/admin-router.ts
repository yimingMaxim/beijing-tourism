import Tour from './tour/tour.vue';
import Chauffeur from './tour/chauffeur.vue';
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
    path: 'chauffeur',
    name: 'busAdmin',
    component: Chauffeur
  },
  {
    path: 'order',
    name: 'order',
    component: Order
  }
];

export default adminRouter;
