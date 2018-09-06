import Vue from 'vue'
import Router from 'vue-router'

import { HelloWorld } from '@/components'
import { files } from '@/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/files',
      name: 'page.files',
      component: files
    }
  ]
})
