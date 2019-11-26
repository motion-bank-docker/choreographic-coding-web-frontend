<template>
  <div
    :style="{transform: `translate3d(0, ${offset}px, 0)`}"
    class="verticalScrollElement">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'verticalScrollElement',
  inject: ['verticalScrollContainer'],
  props: {
    factor: {
      default: 0.25,
      type: Number
    }
  },
  computed: {
    offset () {
      const { height, scrollFactor } = this.verticalScrollContainer

      return scrollFactor * height * this.factor
    }
  }
}
</script>
