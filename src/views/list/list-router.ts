import Tour from './tour/index.vue';

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
  }
];

export default listRouter;
