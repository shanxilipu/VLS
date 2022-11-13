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
    path: '/dashboard',
    component: '@/pages/dashboard',
  },
  {
    component: '@/pages/404',
  },
];
