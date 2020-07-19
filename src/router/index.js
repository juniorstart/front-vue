import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/getToken';
import Recruitments from '@/views/Recruitments/Recruitments.vue';
import NewRecruitment from '@/views/Recruitments/Create.vue';
import EditRecruitment from '@/views/Recruitments/Edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Recruitments,
      },
      {
        path: 'new',
        name: 'NewRecruitment',
        component: NewRecruitment,
      },
      {
        path: 'recruitment/:id',
        name: 'EditRecruitment',
        component: EditRecruitment,
      },
    ],
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
