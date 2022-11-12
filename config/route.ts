export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: '@/pages/home',
  },
  {
    path: '/dataSet',
    component: '@/pages/dataSet',
  },
  {
    component: '@/pages/404',
  },
];
