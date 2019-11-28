<template lang="pug">
  div#app
    div#fixednav
      transition(name="left-drawer")
        component(v-bind:is="currentLeftComponent").drawerContent
      drawer-handle(titleUp='past', titleDown="human", position="left")
      header-nav
      div.contentSpacer
      drawer-handle(titleUp='machine', titleDown="future", position="right")
      transition(name="left-drawer")
        component(v-bind:is="currentRightComponent").drawerContent
    div.contentWrapper
      router-view
</template>

<script>
import LabList from './components/labList'
import verticalScroll from './components/verticalScroll'
import horizontalScroll from './components/horizontalScroll'
import drawerPast from './components/drawerPast'
import drawerHandle from './components/drawerHandle'
import headerNav from './components/headerNav'
export default {
  name: 'App',
  components: {LabList, verticalScroll, horizontalScroll, drawerPast, drawerHandle, headerNav},
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
    height 100vh
    width 100vw
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
  //.left-drawer-enter-active, .left-drawer-leave-active
    //transition all  .5s
  //.left-drawer-enter, .left-drawer-leave-to
    //opacity 0

</style>
