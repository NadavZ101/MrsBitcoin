import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactIndex from '@/views/ContactIndex.vue'
import ContactEdit from '@/views/ContactEdit.vue'
import ContactDetails from '@/views/ContactDetails.vue'
import Stats from '@/views/Stats.vue'
import MarketHistory from '@/cmps/MarketHistory.vue'
import AvgBlockSize from '@/cmps/AvgBlockSize.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/edit/:contactId?',
      name: 'contactEdit',
      component: ContactEdit
    },
    {
      path: '/contact/details/:contactId',
      name: 'contactDetails',
      component: ContactDetails
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
      children: [
        {
          path: '/stats/market_history',
          name: 'marketHistory',
          component: MarketHistory,
        },
        {
          path: '/stats/avg_block_size',
          name: 'avgBlockSize',
          component: AvgBlockSize,
        },

      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
