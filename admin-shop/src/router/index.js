import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../pages/home.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../pages/order.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../pages/search.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../pages/profile.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/loginOrRegister',
    name: 'loginOrRegister',
    component: () => import('../pages/loginOrRegister/loginOrRegister.vue'),
    children: [
      {
        path: '/',
        name: 'login',
        redirect: '/login'
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../pages/loginOrRegister/login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../pages/loginOrRegister/register.vue')
      }
    ]
  },
  {
    path: '/shop',
    name: 'shops',
    component: () => import('../pages/shops/shops'),
    children: [
      {
        path: '',
        redirect: '/shop/shops_goods'
      },
      {
        path: '/shop/shops_goods',
        name: 'shopGoods',
        component: () => import('../pages/shops/shops_goods/shops_goods.vue')
      },
      {
        path: '/shop/shops_ratings',
        name: 'shopRatings',
        component: () => import('../pages/shops/shops_ratings/shops_ratings.vue')
      },
      {
        path: '/shop/shops_infos',
        name: 'shopInfos',
        component: () => import('../pages/shops/shops_infos/shops_infos.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;