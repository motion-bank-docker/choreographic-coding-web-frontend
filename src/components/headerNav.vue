<template lang="pug">
  div.leftMenu(v-on:click="closeAllDrawer")
    div.logobox
      vertical-scroll(:factor="-0.8")
        router-link(:to="{name: 'HelloWorld'}")
          h1.logo Choreographic Coding Labs
    div.logobox
      vertical-scroll(:factor="0.8")
        router-link(:to="{name: 'HelloWorld'}")
          h1.logo Coding Labs Choreographic
    nav#menu
      vertical-scroll(:factor="-0.8")
        ul
          li
            router-link(:to="{name: 'HelloWorld'}") Labs
          li
            router-link(:to="{name: 'page.files'}") About
          li
            router-link(:to="{name: 'page.files'}") Calls
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
    font-size 7vw
    margin 0
  nav ul
    display flex
    font-size 3.6vw
    margin 0
    padding 0
  nav ul>li
    list-style none
    margin-top 1.5rem
</style>
