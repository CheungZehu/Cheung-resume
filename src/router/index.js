import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Personal',
      component: Personal
    }
  ]
})
