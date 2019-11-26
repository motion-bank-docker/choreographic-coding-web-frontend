import Vue from 'vue'
import Router from 'vue-router'

import { HelloWorld } from '@/components'
import { files, nodes, showcase } from '@/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nodes',
      name: 'page.nodes',
      component: nodes
    },
    {
      path: '/files',
      name: 'page.files',
      component: files
    },
    {
      path: '/labs',
      name: 'page.labs',
      component: nodes
    },
    {
      path: '/showcase',
      name: 'page.showcase',
      component: showcase
    }
  ]
})
