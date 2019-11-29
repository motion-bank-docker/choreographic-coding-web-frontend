<template lang="pug">
  div#app
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
      return this.$store.getters['drawer/g_currentRightComponent']
    },
    currentLeftComponent: function () {
      return this.$store.getters['drawer/g_currentLeftComponent']
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
  #fixednav
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
    padding 4rem
    max-width 30vw
  .contentWrapper
    width 55vw
    margin-right 15vw
    float right
  .drawer-handle-right
    transform rotate(180deg)
  .drawerIsOpen
    box-shadow inset 0 0 10px #000000
  @media (max-width: 800px)
    #fixednav
      writing-mode unset
      transform unset
      height 80vh
      position relative
    .drawer-handle-right
      order -2
      transform unset
</style>
