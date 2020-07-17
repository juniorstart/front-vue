import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/getToken';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkNameL: "login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkNameL: "login" */ '../views/Register.vue'),
  },
];

const router = new VueRouter({
  routes,
});

const isAuthenticated = Boolean(getToken());

router.beforeEach((to, from, next) => {
  if ((to.name !== 'Login' && to.name !== 'Register') && !isAuthenticated) next({ name: 'Login' });
  else next();
});

export default router;
