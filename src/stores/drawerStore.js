
export default {
  namespaced: true,
  state: {
    drawer: {
      left: {
        up: false,
        down: false
      },
      right: {
        up: false,
        down: false
      }
    }
  },
  mutations: {
    openDrawer (state, payload) {
      state.drawer[payload.position][payload.upDown] = !state.drawer[payload.position][payload.upDown]
    },
    closeAllDrawer (state) {
      state.drawer.left.down = false
      state.drawer.left.up = false
      state.drawer.right.down = false
      state.drawer.right.up = false
    }

  },
  getters: {
    g_drawerLeftDownOpen (state) {
      return state.drawer.left.down
    },
    g_drawerLeftUpOpen (state) {
      return state.drawer.left.up
    },
    g_drawerRightDownOpen (state) {
      return state.drawer.right.down
    },
    g_drawerRightUpOpen (state) {
      return state.drawer.right.up
    }
  },
  actions: {}
}
