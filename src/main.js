
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { drupalStore } from './stores'
import App from './App'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-unused-vars */
const store = new Vuex.Store({
  modules: {
    drupal: drupalStore
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
