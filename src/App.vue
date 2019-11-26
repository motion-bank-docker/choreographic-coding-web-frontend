<template lang="pug">
  div#app
    div#fixednav
      div.leftMenu
        div.leftDrawer.drawer
          div.drawerBottom
            h3 past
          div.drawerTop
            h3 human
        div.logobox
          vertical-scroll(:factor="-0.8")
            h1.logo Choreographic Coding Labs
        div.logobox
          vertical-scroll(:factor="0.8")
            router-link(:to="{name: 'HelloWorld'}")
              h1.logo Coding Labs Choreographic
        nav#menu
          vertical-scroll(:factor="-0.8")
            ul
              li
                router-link(:to="{name: 'page.nodes'}") Labs
              li
                router-link(:to="{name: 'page.files'}") About
              li
                router-link(:to="{name: 'page.files'}") Calls
              li
                router-link(:to="{name: 'page.files'}") FAQ
              li
                router-link(:to="{name: 'page.showcase'}") Showcase
      div.contentSpacer
      div.drawer.rightDrawer
        div.drawerBottom
          h3 future
        div.drawerTop
          h3 machine
    div.contentWrapper
      router-view
</template>

<script>
import AFrameStage from './components/AFrameStage'
import LabList from './components/labList'
import verticalScroll from './components/verticalScroll'
import horizontalScroll from './components/horizontalScroll'
export default {
  name: 'App',
  components: {AFrameStage, LabList, verticalScroll, horizontalScroll},
  async mounted () {
  }
}
</script>

<style lang="stylus">
  @import "~@/assets/fonts/fonts.scss";

  :root, html
    font-size 18px
    font-family 'SpaceGrotesk', serif
    color black
    background #e7e7e7

  body
    margin 0
  h1, h2, h3, h4, h5, h6
    font-weight bold
    font-family 'Syne', sans-serif

  a, a:hover, a:active, a:visited
    color inherit
    text-decoration underline
  #app
    /*display flex*/
    /*flex-direction row*/
  header
    height 100vh
    width 20vw
    flex-shrink 0
  #fixednav
    height 100vh
    width 100vw
    writing-mode: tb-rl
    transform: rotate(-180deg)
    position fixed
    display flex
    flex-flow column
  .leftMenu
    background #e7e7e7
    border-left black 2px solid
  .logobox
    overflow hidden
    white-space nowrap
  .logo
    font-size 5rem
    margin 0
  nav ul
    display flex
    font-size 2.5rem
    margin 0
    padding 0
  nav ul>li
    list-style none
    margin-top 1.5rem
  #fixednav a
    text-decoration none
  .drawer
    display flex
    background #e7e7e7
    justify-content space-between
  .drawer>div
    height 50vh
  .drawerTop
    text-align right
    border-top black 2px solid
  .drawer>div>h3
    font-size 1.5rem
    margin 1rem 0.6rem
  .contentSpacer
    flex-grow 10
  .rightDrawer
    align-self flex-end
    border-right black 2px solid
  .leftDrawer
    border-left black 2px solid
  .contentWrapper
    width 70vw
    margin-right 5vw
    float right
</style>
