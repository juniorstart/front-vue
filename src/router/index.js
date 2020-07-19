import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/getToken';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Recruitments/Recruitments.vue'),
      },
      {
        path: 'new',
        name: 'NewRecruitment',
        component: () => import(/* webpackChunkName: "home" */ '../views/Recruitments/Create.vue'),
      },
      {
        path: 'recruitment/:id',
        name: 'EditRecruitment',
        component: () => import(/* webpackChunkName: "home" */ '../views/Recruitments/Edit.vue'),
      },
      {
        path: 'to-do-lists',
        name: 'ToDoLists',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/Tasks/ToDoLists.vue'),
      },
      {
        path: 'to-do-lists/create',
        name: 'NewToDoList',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/Tasks/Create.vue'),
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
