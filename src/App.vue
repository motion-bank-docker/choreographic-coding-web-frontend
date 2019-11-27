<template lang="pug">
  div#app
    div#fixednav
      transition(name="left-drawer")
        div(v-if="drawerLeftDownOpen").drawerContent
          drawer-past
      drawer-handle(titleUp='past', titleDown="human", position="left")
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
      drawer-handle(titleUp='machine', titleDown="future", position="right")
    div.contentWrapper
      router-view
</template>

<script>
import LabList from './components/labList'
import verticalScroll from './components/verticalScroll'
import horizontalScroll from './components/horizontalScroll'
import DrawerPast from './components/DrawerPast'
import drawerHandle from './components/drawerHandle'
export default {
  name: 'App',
  components: {LabList, verticalScroll, horizontalScroll, DrawerPast, drawerHandle},
  data () {
    return {
    }
  },
  methods: {
    closeAllDrawer: function () {
      this.$store.commit('drawer/closeAllDrawer')
    }
  },
  computed: {
    drawerLeftDownOpen: function () {
      return this.$store.getters['drawer/g_drawerLeftDownOpen']
    }
  },
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
    z-index 10
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
  .drawerContent
    background #e7e7e7
    writing-mode lr
    transform rotate(180deg)
    overflow-y: scroll
    padding 3rem
    max-width 30vw
  .contentSpacer
    flex-grow 10
    transition flex-grow 500ms
  .contentWrapper
    width 70vw
    margin-right 5vw
    float right
  //.left-drawer-enter-active, .left-drawer-leave-active
    //transition all  .5s
  //.left-drawer-enter, .left-drawer-leave-to
    //opacity 0

</style>
