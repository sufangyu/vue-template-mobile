import notFound from './modules/not-found';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home.vue'),
  },    
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'about' */ '@/views/about.vue'),
    meta: {
      auth: false,
    },
  },
  notFound,
];
