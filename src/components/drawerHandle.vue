<template lang="pug">
  div.drawer
    div.drawerBottom(v-on:click='openDrawer({title: titleDown, upDown: "down"}, $event)'
                      :class="isActive(titleDown)")
      h3 {{titleDown}}
    div.drawerTop(v-on:click='openDrawer({title: titleUp, upDown: "up"}, $event)'
                      :class="isActive(titleUp)")
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
  computed: {
  },
  methods: {
    isActive: function (title) {
      let active = this.$store.getters['drawer/g_active']
      return {
        drawerActive: title === active
      }
    },
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
    background var(--overlay-bg-color)
    justify-content space-between
    outline 2px solid var(--main-border-color)
    z-index 100
    cursor pointer
  .drawerBottom, .drawerTop
    flex 1
    outline 1px solid var(--main-border-color)
  .drawerTop
    text-align right
  .drawer h3
    font-size calc(10px + 1.5vw)
    margin 1rem 0.6rem
  .drawerActive
    //color var(--main-text-color-active)
    color var(--overlay-bg-color)
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  @supports (-webkit-text-stroke-color: #000) or (-moz-text-stroke-color: #000) {
    .drawerActive, .drawer>div:hover {
      text-shadow: none;
      color: var(--overlay-bg-color);
      -moz-text-stroke-color: #000;
      -webkit-text-stroke-color: #000;
      -moz-text-stroke-width: 1px;
      -webkit-text-stroke-width: 1px;
    }

    a:active, a:visited {
      -webkit-text-stroke: inherit;
    }
  }
  @media (max-width: 800px)
    .drawerBottom, .drawerTop
      text-align center
    .drawer h3
      font-size calc(10px + 1.3vw)
      margin 1rem 0.4rem
  @media (max-height: 500px)
    .drawer h3
      font-size calc(10px + 1vw)
      margin 0.5rem 0.4rem
  @media (max-height: 350px)
    .drawer
      height 100%
</style>
