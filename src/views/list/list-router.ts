import Tour from './tour/index.vue';
import Detail from './detail/detail.vue';

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
    path: 'detail',
    name: 'detail',
    component: Detail
  }
];

export default listRouter;
