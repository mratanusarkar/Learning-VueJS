import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetailsView from '../views/jobs/JobDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // lazy loading to load component only when the user visits the route
    // and not initially, all together when the home page is loading.
    // this helps reduce the js bundle size in prod and other memory benefits. 
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsView,
    props: true
  },
  // redirect
  {
    path: '/job',
    redirect: '/jobs'
  },
  {
    
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // fallback page when unknown route is hit
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
