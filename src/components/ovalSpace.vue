<template lang="pug">
  div.oval(:style="{transform: `rotate(${rotation}deg)`}")
    slot
</template>

<script>
export default {
  name: 'ovalSpace',
  props: {
    rotate: {
      default: 1,
      type: Number
    },
    randomRotate: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    rotation () {
      if (this.randomRotate) {
        return Math.random() * 60 - 30
      } else {
        return 0
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
  .oval
    text-align center
    padding 1em
    padding-bottom 0.5em
    border black solid 1px
    border-radius 50%
  .oval:hover
    box-shadow 0 0 15px 0px #ffffff
</style>
