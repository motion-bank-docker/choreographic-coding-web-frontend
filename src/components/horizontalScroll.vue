<template>
  <div :style="{transform: `translate3d(${offset}px, 0, 0)`}"
       class="horizontalScroll">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'horizontalScroll',
  data () {
    return {
      data: {
        height: 0,
        scrollFactor: 0,
        width: 0
      }
    }
  },
  props: {
    factor: {
      default: 0.25,
      type: Number
    }
  },
  mounted () {
    const eventHandler = () => requestAnimationFrame(this.calcScroll)
    window.addEventListener('resize', eventHandler)
    window.addEventListener('scroll', eventHandler)

    this.$on(`hook:destroyed`, () => {
      window.removeEventListener('resize', eventHandler)
      window.removeEventListener('scroll', eventHandler)
    })
  },
  methods: {
    calcScroll () {
      const containerRect = this.$el.getBoundingClientRect()

      this.data.height = containerRect.height
      this.data.width = containerRect.width

      const viewportOffsetTop = containerRect.top
      const viewportOffsetBottom = window.innerHeight - viewportOffsetTop

      this.data.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.data.height)
    }
  },
  computed: {
    offset () {
      return window.innerWidth * (this.data.scrollFactor - 0.5)
    }
  }
}
</script>

<style scoped>
  .horizontalScroll{
    overflow: hidden;
  }
</style>
