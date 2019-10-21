import List from './list/index.vue';
import TourDetail from './detail/detail.vue';
import TourBook from './book/tourBook/tourBook.vue';
import CarBook from './book/carBook/carBook.vue';

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
    name: 'tourBook',
    component: TourBook
  },
  {
    path: 'car_order/:car_params',
    name: 'carBook',
    component: CarBook
  }
];

export default serviceRouter;
