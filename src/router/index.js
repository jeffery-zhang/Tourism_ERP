import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import index from 'page/index/index'

import login from 'page/login/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogged = Cookies.get('isLogged');
  if (isLogged && isLogged === 'true') {
    to.path.includes('/login') ? next('/') : next();
    return;
  } else {
    !to.path.includes('/login') ? next('/login') : next();
    return;
  }
  next();
});

export default router;
