import List from './list/index.vue';
import TourDetail from './detail/detail.vue';
import TourBook from './book/tourBook/tourBook.vue';

import listRouter from './list/list-router';

const serviceRouter = [
  {
    path: 'list',
    component: List,
    children: listRouter
  },
  {
    path: 'tour_detail/:tourId',
    name: 'tourDetail',
    component: TourDetail
  },
  {
    path: 'tour_order/:tourId',
    name: 'TourBook',
    component: TourBook
  }
];

export default serviceRouter;
