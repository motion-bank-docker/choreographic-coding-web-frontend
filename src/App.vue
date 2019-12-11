<template lang="pug">
  div#app
    div#fullgradient
    div#fixednav
      transition(name="left-drawer", mode="out-in")
        component(v-bind:is="currentLeftComponent").drawerContent
      drawer-handle(titleDown='past', titleUp="human", position="left").drawer-handle-left
      header-nav
      div(:class="drawerIsOpen").contentSpacer
      drawer-handle(titleDown='machine', titleUp="future", position="right").drawer-handle-right
      transition(name="left-drawer", mode="out-in")
        component(v-bind:is="currentRightComponent").drawerContent
    div(v-on:click="closeAllDrawer").contentWrapper
      router-view
</template>

<script>
import LabList from './components/labList'
import verticalScroll from './components/verticalScroll'
import horizontalScroll from './components/horizontalScroll'
import drawerPast from './components/drawerPast'
import drawerFuture from './components/drawerFuture'
import drawerHuman from './components/drawerHuman'
import drawerMachine from './components/drawerMachine'
import drawerHandle from './components/drawerHandle'
import headerNav from './components/headerNav'
export default {
  name: 'App',
  components: {LabList, verticalScroll, horizontalScroll, drawerPast, drawerFuture, drawerMachine, drawerHuman, drawerHandle, headerNav},
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
    currentRightComponent: function () {
      if (window.innerWidth > 800) {
        return this.$store.getters['drawer/g_currentRightComponent']
      }
    },
    currentLeftComponent: function () {
      if (window.innerWidth > 800) {
        return this.$store.getters['drawer/g_currentLeftComponent']
      } else {
        return this.$store.getters['drawer/g_lastClicked']
      }
    },
    drawerIsOpen: function () {
      return (this.currentRightComponent || this.currentLeftComponent) ? 'drawerIsOpen' : false
    }
  },
  async mounted () {
  },
  watch: {
    '$route' () {
      this.$store.commit('drawer/closeAllDrawer')
    }
  }
}
</script>

<style lang="stylus">
  @import "~@/assets/fonts/fonts.scss";
  *, *::before,*::after
    box-sizing: border-box
  :root, html
    font-size 24px
    font-family 'SpaceGrotesk', serif
    color black
    background #e7e7e7
    line-height: 1.3
    letter-spacing 0.003em
  body
    margin 0
    overflow-x: hidden
  h1, h2, h3, h4, h5, h6
    font-weight bold
    font-family 'Syne', sans-serif
  a, a:hover, a:active, a:visited
    color inherit
    text-decoration underline
  p
    text-indent: 2.5rem
    margin-top 2rem
    margin-bottom 0
  p + p
    margin 0
  #fullgradient
    position fixed
    width 100%
    height 100%
    z-index 200
    pointer-events none
    background: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 13%,rgba(59,0,255,0) 87%,rgba(59,0,255,0.33) 100%)
    background: linear-gradient(to bottom, rgb(231, 231, 231, 0.8) 0%,rgba(255,255,255,0) 13%,rgba(59,0,255,0) 82%,rgba(255,224,0,0.4) 100%)
    background: linear-gradient(to bottom, rgb(231, 231, 231, 0.8) 0%,rgba(255,255,255,0) 8%,rgba(255,255,255,0) 92%,rgb(231, 231, 231, 0.8) 100%)
  #app
    /*display flex*/
    /*flex-direction row*/
  #fixednav
    z-index 10
    top: 0
    left: 0
    height 100%
    width 100%
    writing-mode: tb-rl
    transform: rotate(-180deg)
    position fixed
    display flex
    flex-flow column
    pointer-events: none
  #fixednav>*
    pointer-events: auto
  #fixednav a
    text-decoration none
  #fixednav .contentSpacer
    flex-grow 1
    transition flex-grow 500ms
    pointer-events: none
  .drawerContent
    background #e7e7e7
    writing-mode lr
    transform rotate(180deg)
    overflow-y: scroll
    padding 3rem
    max-width 30vw
  .contentWrapper
    width 50vw
    margin-right 15vw
    float right
  .drawer-handle-right
    transform rotate(180deg)
  .drawerIsOpen
    box-shadow inset 0 0 10px #000000
  iframe
    max-width 100%
  @media (max-width: 800px)
    #fixednav
      width unset
      flex-wrap wrap
      flex-direction row
    .drawer
      height 50%
    .leftMenu, .contentSpacer
      height 100%
    .drawer-handle-right
      order -2
      transform unset
    nav
      height 100%
      overflow hidden
    .drawerContent
      max-width 80vw
      order -5
</style>
