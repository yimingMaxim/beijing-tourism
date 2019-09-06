import Tour from './tour/index.vue';

const listRouter = [
  {
    path: '',
    redirect: 'tour'
  },
  {
    path: 'private_tour',
    name: 'tourList',
    meta: {
      type: 'private',
      title: 'private tour'
    },
    component: Tour
  },
  {
    path: 'group_tour',
    name: 'tourList',
    meta: {
      type: 'group',
      title: 'group tour'
    },
    component: Tour
  }
];

export default listRouter;
