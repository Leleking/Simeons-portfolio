import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/welcome',
    component: () => import(/* webpackChunkName: "mainlayout" */ '../layout/MainLayout'),
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
      component: () => import(/* webpackChunkName: "welcome" */ '../views/welcome.vue'),
        
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),
        
      },
      {
        path: 'project/:id',
        name: 'View Project',
        component: () => import(/* webpackChunkName: "project" */ '../views/project.vue'),
      }

    ]

    //component: Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
