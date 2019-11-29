<template lang="pug">
  div.drawer
    div.drawerBottom(v-on:click='openDrawer({title: titleDown, upDown: "down"}, $event)')
      h3 {{titleDown}}
    div.drawerTop(v-on:click='openDrawer({title: titleUp, upDown: "up"}, $event)')
      h3 {{titleUp}}
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
    openDrawer: function ({title, upDown}, event) {
      this.$store.commit('drawer/openBothDrawer', {
        position: this.position,
        title,
        upDown
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
  .drawerBottom, .drawerTop
    flex 1
    outline black 1px solid
  .drawerTop
    text-align right
  .drawer h3
    font-size calc(10px + 1.5vw)
    margin 1rem 0.6rem
  @media (max-width: 800px)
    .drawerBottom, .drawerTop
      text-align center
    .drawer h3
      font-size calc(10px + 1.3vw)
      margin 1rem 0.4rem
</style>
