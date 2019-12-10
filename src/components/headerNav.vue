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
            router-link(:to="{name: 'page.files'}") About
          li
            router-link(:to="{name: 'page.calls'}") Calls
          li
            router-link(:to="{name: 'page.files'}") FAQ
          li
            router-link(:to="{name: 'page.showcase'}") Showcase
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
    background #e7e7e7
    border-left black 2px solid
    z-index 10
  .logobox
    overflow hidden
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
    nav ul
      font-size calc(15px + 2vw)
    .logobox-left
      display none
</style>
