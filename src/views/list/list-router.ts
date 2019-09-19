import Tour from './tour/index.vue';
import TourDetail from './detail/detail.vue';

const listRouter = [
  {
    path: '',
    redirect: 'tour'
  },
  {
    path: 'private',
    name: 'tourList',
    meta: {
      type: 'private',
      title: 'private tour'
    },
    component: Tour
  },
  {
    path: 'group',
    name: 'tourList',
    meta: {
      type: 'group',
      title: 'group tour'
    },
    component: Tour
  },
  {
    path: 'tour_detail/:data',
    // path: 'tour_detail/:tourId',
    name: 'tourDetail',
    component: TourDetail
  }
];

export default listRouter;
