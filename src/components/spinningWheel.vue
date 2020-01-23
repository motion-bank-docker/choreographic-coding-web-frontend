<template lang="pug">
  div#center
    div#wrap
      h2#text
        template(v-for="(letters, index) in text")
          span(:style="{ transform: 'rotateY(' + index * (360/ text.length ) + 'deg) translateZ(3em)' }") {{letters}}
</template>

<script>
export default {
  name: 'spinningWheel',
  props: {
    text: {
      default: ' Choreographic Coding Lab',
      type: String
    }
  },
  computed: {
    rotation () {
      return this.text
    }
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
  #center
    font-size 4rem
    top: 50%
    left: 50%
    position: absolute
    transform: translate3d(-50%, -50%, 0)
    perspective: 5em
  #wrap
    position: relative
    transform-style: preserve-3d
    transform-origin: 50% 50% -6em
    animation: spin2 15s linear infinite
    @keyframes spin2
      0%
        transform: rotateZ(0deg) rotateX(0deg)
      100%
        transform: rotateZ(360deg) rotateX(360deg)
  #text
    position: relative
    transform-style: preserve-3d
    animation: spin1 4s linear infinite
    @keyframes spin1
      0%
        transform: translateZ(-5em) rotateY(0deg)
      100%
        transform: translateZ(-5em) rotateY(360deg)
  span
    position: absolute
    /*
    for i in 1..20
      &:nth-child({i})
        transform: rotateY((i * (360/20))deg) translateZ(3em)
     */
</style>
