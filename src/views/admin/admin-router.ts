import Tour from './tour/tour.vue';
import Comment from './comment/comment.vue';
import Chauffeur from './chauffeur/chauffeur.vue';
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
    path: 'comment/:tourId',
    name: 'commentAdmin',
    component: Comment
  },
  {
    path: 'chauffeur',
    name: 'chauffeurAdmin',
    component: Chauffeur
  },
  {
    path: 'order',
    name: 'order',
    component: Order
  }
];

export default adminRouter;
