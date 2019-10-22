import Tour from './tour/tour.vue';
import Comment from './comment/comment.vue';
import Chauffeur from './chauffeur/chauffeur.vue';
import TourOrder from './order/tourOrder.vue'
import CarOrder from './order/carOrder.vue'

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
    path: 'tour_order',
    name: 'tourOrder',
    component: TourOrder
  },
  {
    path: 'chauffeur_order',
    name: 'chauffeurOrder',
    component: CarOrder
  }
];

export default adminRouter;
