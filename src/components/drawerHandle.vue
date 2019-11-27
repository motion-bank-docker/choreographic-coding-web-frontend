<template lang="pug">
  div.drawer
    div.drawerBottom(v-on:click='openDrawerUp')
      h3 {{titleUp}}
    div.drawerTop(v-on:click='openDrawerDown')
      h3 {{titleDown}}
</template>

<script>
export default {
  name: 'drawerHandle',
  props: {
    titleUp: String,
    titleDown: String,
    position: String
  },
  methods: {
    openDrawerDown: function (event) {
      this.$store.commit('drawer/openDrawer', {
        position: this.position,
        upDown: 'down'
      })
    },
    openDrawerUp: function (event) {
      this.$store.commit('drawer/openDrawer', {
        position: this.position,
        upDown: 'up'
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .drawer
    display flex
    background #e7e7e7
    justify-content space-between
    outline black 2px solid
    z-index 100
  .drawer>*
    height 50vh
  .drawerTop
    text-align right
    border-top black 2px solid
  .drawer h3
    font-size 1.5rem
    margin 1rem 0.6rem
</style>
