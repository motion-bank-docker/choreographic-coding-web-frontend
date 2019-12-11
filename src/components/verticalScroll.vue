<template>
  <div :style="{transform: `translate3d(0, ${offset}px, 0)`}"
       class="verticalScroll">
    <div v-for="item in duplicateHtml" v-bind:key="item">
      <slot v-bind:item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'verticalScroll',
  data () {
    return {
      duplicateHtml: [0, 1, 2, 3, 4, 5],
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

    this.$on(`hook:beforeDestroy`, () => {
      window.removeEventListener('resize', eventHandler)
      window.removeEventListener('scroll', eventHandler)
    })
  },
  methods: {
    position: function () {
      this.scrollPosition = scrollY
      this.height = this.$el.children[0].getBoundingClientRect().height
    }
  },
  computed: {
    offset () {
      return (this.scrollPosition * this.factor) % (this.height * 2) - (this.height * 2)
    }
  }
}
</script>

<style scoped>
  .verticalScroll {
    display: flex;
    flex-direction: row;
  }
  .verticalScroll div:nth-child(2n) {
    color: var(--overlay-bg-color);
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

</style>
