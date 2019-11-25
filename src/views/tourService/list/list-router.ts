import Tour from './tour/index.vue';
import Hotel from './hotel/hotel.vue'

const listRouter = [
  {
    path: '',
    redirect: 'tour'
  },
  {
    path: 'private',
    name: 'privateTour',
    meta: {
      type: 'private',
      title: 'private tour'
    },
    component: Tour
  },
  {
    path: 'group',
    name: 'groupTour',
    meta: {
      type: 'group',
      title: 'group tour'
    },
    component: Tour
  },
  {
    path: 'hotel',
    name: 'hotel',
    meta: {
      type: 'hotel',
      title: 'hotels'
    },
    component: Hotel
  }
];

export default listRouter;
