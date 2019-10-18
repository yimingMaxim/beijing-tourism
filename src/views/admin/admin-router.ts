import Tour from './tour/tour.vue';
import Comment from './comment/comment.vue';
import Chauffeur from './chauffeur/chauffeur.vue';
import TourOrder from './order/tourOrder.vue'

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
    component: TourOrder
  }
];

export default adminRouter;
