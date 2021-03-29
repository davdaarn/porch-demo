import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecentPosts from '../views/RecentPosts.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home/blog/recent'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home/blog/recent',
    // redirect: '/home/blog/recent',
    name: 'RecentPosts',
    component: RecentPosts
  }
]

const router = new VueRouter({
  routes
})

export default router
