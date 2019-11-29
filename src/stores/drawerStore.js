function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const names = {
  right: {
    up: 'Future',
    down: 'Machine'
  },
  left: {
    up: 'Human',
    down: 'Past'
  }
  // TODO: flip right side
}

export default {
  namespaced: true,
  state: {
    drawer: {
      right: false,
      left: false
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
    openBothDrawer (state, payload) {
      console.log(payload)
      state.drawer.left = 'drawer' + names.left[payload.upDown]
      state.drawer.right = 'drawer' + names.right[payload.upDown]
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
    }
  },
  actions: {}
}
