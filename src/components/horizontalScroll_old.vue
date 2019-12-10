<template>
  <div class="horizontalScroll">
    <div class="horizontalScrollChild">
      <slot/>
      <slot/>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'horizontalScroll',
  data () {
    return {
    }
  },
  props: {
    factor: {
      default: 0.25,
      type: Number
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
  .horizontalScroll {
    max-width: 100vw;  /* iOS braucht das*/
    white-space: nowrap;
    /*overflow: hidden;*/
    z-index: -10;
  }
  .horizontalScrollChild {
    animation: marquee 10s linear infinite;
  }
  .horizontalScrollChild:hover {
    animation-play-state: paused
  }
  a, h3 {
    text-decoration: none;
  }
  .horizontalScrollChild>* {
    display: inline-block;
    padding-right: 10vw;
  }
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
</style>

<!-- -346.391px -->
