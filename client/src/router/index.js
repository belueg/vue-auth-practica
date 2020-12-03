import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { onlyPublic: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: { onlyPublic: true }
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: () =>
      import(/* webpackChunkName: "userprofile" */ '../views/UserProfile.vue'),
    meta: { isPrivate: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const isAuthenticated = function() {
  return window.localStorage.token
}

router.beforeEach((to, from, next) => {
  if (to.meta.isPrivate && !isAuthenticated()) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated()) {
    next('/profile')
  } else if (to.path === '/register' && isAuthenticated()) {
    next('/profile')
  } else {
    next()
  }
})

export default router
