import Home from './home.vue';

const mainRouter = [
  {
    path: '',
    redirect: 'group'
  },
  {
    path: 'group',
    name: 'group',
    component: Home
  },
  {
    path: 'private',
    name: 'private',
    component: Home
  },
  {
    path: 'chauffeur',
    name: 'chauffeur',
    component: Home
  },
  {
    path: 'nightShow',
    name: 'nightShow',
    component: Home
  }
];

export default mainRouter;
