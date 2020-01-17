<template lang="pug">
  div.leftMenu(v-on:click="closeAllDrawer")
    div.logobox.logobox-left
      vertical-scroll(:factor="-0.8")
        router-link(:to="{name: 'HelloWorld'}")
          h2.logo Choreographic Coding Labs&nbsp;
    div.logobox.logobox-right
      vertical-scroll(:factor="0.8")
        router-link(:to="{name: 'HelloWorld'}")
          h2.logo Coding Labs Choreographic&nbsp;
    nav#menu
      vertical-scroll(:factor="-0.8")
        ul
          li
            router-link(:to="{name: 'HelloWorld'}") Labs
          li
            router-link(:to="{name: 'page.about'}") About
          li
            router-link(:to="{name: 'page.calls'}") Calls
          li
            router-link(:to="{name: 'page.files'}") FAQ
          li
            router-link(:to="{name: 'page.showcase'}") Showcase
    div.gradientOverlay
</template>

<script>
import verticalScroll from './verticalScroll'
export default {
  name: 'headerNav',
  components: { verticalScroll },
  methods: {
    closeAllDrawer: function () {
      this.$store.commit('drawer/closeAllDrawer')
    }
  }
}
</script>

<style scoped lang="stylus">
  .leftMenu
    background var(--overlay-bg-color)
    border-left 2px solid var(--main-border-color)
    z-index 10
  .gradientOverlay
    position relative
    top 0
    left 100%
    width 100%
    height 100%
    z-index 200
    pointer-events none
    background: linear-gradient(
      to bottom,
      var(--overlay-bg-color) 0%,
      rgba(255,255,255,0) 5%,
      rgba(255,255,255,0) 95%,
      var(--overlay-bg-color) 100%
    )
  .logobox
    /*overflow hidden*/
    white-space nowrap
  .logo
    font-size calc(15px + 6vw)
    margin 0
    line-height 0.95
  nav
    margin-right 0.9vw
    line-height 0.95
  nav ul
    display flex
    font-size calc(15px + 3.4vw)
    margin 0
    padding 0
  nav ul>li
    list-style none
    margin-top 1.5rem
  @media (max-width: 800px)
    .logo
      font-size calc(15px + 2vw)
      line-height 1.15
    nav
      margin-right 0.4vw
      line-height 0.95
    nav ul
      font-size calc(15px + 2vw)
    .logobox-left
      display none
</style>
