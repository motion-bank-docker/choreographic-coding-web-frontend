function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
  namespaced: true,
  state: {
    drawer: {
      right: String,
      left: String
    }
  },
  mutations: {
    openDrawer (state, payload) {
      state.drawer.left = false
      state.drawer.right = false
      const drawerName = payload.title.toString()
      const componentName = 'drawer' + capitalizeFirstLetter(drawerName)
      state.drawer[payload.position] = componentName
    },
    closeAllDrawer (state) {
      state.drawer.left = false
      state.drawer.right = false
    }

  },
  getters: {
    g_currentRightComponent (state) {
      return state.drawer.right
    },
    g_currentLeftComponent (state) {
      return state.drawer.left
    },
    g_currentComponent (state) {
      return state.currentComponent
    }
  },
  actions: {}
}
