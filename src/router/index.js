import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import index from 'page/index/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/product/product-list',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogged = Cookies.get('isLogged');
  if (isLogged && isLogged === 'true') {
    to.path.includes('/login') ? next('/index') : next();
    return;
  } else {
    !to.path.includes('/login') ? next('/login') : next();
    return;
  }
  next();
});

export default router;
