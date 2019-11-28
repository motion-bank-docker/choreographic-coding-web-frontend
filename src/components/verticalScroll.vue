<template>
  <div :style="{transform: `translate3d(0, ${offset}px, 0)`}"
       class="verticalScroll">
    <div v-for="item in duplicateHtml" v-bind:key="item">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'verticalScroll',
  data () {
    return {
      duplicateHtml: [0, 1, 2, 3, 4, 5, 6, 7],
      height: 0,
      scrollPosition: 0,
      width: 0
    }
  },
  props: {
    factor: {
      default: 0.25,
      type: Number
    }
  },
  mounted () {
    const eventHandler = () => requestAnimationFrame(this.position)
    window.addEventListener('resize', eventHandler)
    window.addEventListener('scroll', eventHandler)

    this.$on(`hook:destroyed`, () => {
      window.removeEventListener('resize', eventHandler)
      window.removeEventListener('scroll', eventHandler)
    })
  },
  methods: {
    position () {
      const containerRect = this.$el.getBoundingClientRect()

      this.height = containerRect.height
      this.width = containerRect.width
      this.scrollPosition = scrollY
    }
  },
  computed: {
    offset () {
      return ((this.scrollPosition * this.factor) % this.height) - (this.height * 1.3)
    }
  }
}
</script>

<style scoped>
  .verticalScroll {
    display: flex;
    flex-direction: row;
  }

</style>
