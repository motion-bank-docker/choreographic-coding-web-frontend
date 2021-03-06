import Vue from 'vue'
import Router from 'vue-router'

import { HelloWorld } from '@/components'
import { files, nodes, showcase, labs, lab, calls, about } from '@/pages'

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
      path: '/showcase',
      name: 'page.showcase',
      component: showcase
    },
    {
      path: '/about',
      name: 'page.about',
      component: about
    },
    {
      path: '/calls',
      name: 'page.calls',
      component: calls
    },
    {
      path: '/labs',
      name: 'page.labs',
      component: labs
    },
    {
      path: '/lab/:nid',
      name: 'page.lab',
      component: lab
    }
  ]
})
