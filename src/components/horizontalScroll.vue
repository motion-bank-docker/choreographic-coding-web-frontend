<script>
export default {
  name: 'horizontalScroll',
  functional: true,
  props: {
    duration: {
      type: Number,
      default: 6
    },
    repeat: {
      type: Number,
      default: 2,
      validator: function (val) {
        return val >= 2
      }
    },
    paddingRight: {
      type: Number,
      default: 80
    },
    paused: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    reverseDirection: {
      type: Boolean,
      default: false
    },
    hideOverflow: {
      type: Boolean,
      default: false
    }
  },
  // methods: {
  //   pauseAnimation: function () {
  //     this.props.paused = true
  //   }
  // },
  render (h, { $style, props: { duration, repeat, paused, pauseOnHover, paddingRight, reverseDirection, hideOverflow }, children, data: { staticClass, key } }) {
    const text = h('div', {
      class: $style.text,
      style: {
        animationDuration: `${duration}s`,
        paddingRight: `${paddingRight}px`,
        animationDirection: `${reverseDirection ? 'reverse' : 'normal'}`
      }
    }, children)
    return h('div', {
      key,
      // on: {
      //   mouseover: function (event) {
      //     console.log(staticClass)
      //   }
      // },
      class: [
        staticClass,
        hideOverflow
          ? $style.wrapNoOverflow
          : $style.wrap,
        pauseOnHover
          ? $style.pauseOnHover
          : undefined
      ]
    }, [
      h('div', {
        class: [
          paused
            ? $style.paused
            : undefined,
          $style.content
        ]
      }, Array(repeat).fill(text))
    ])
  }
}
</script>

<style module>
  .wrap {
    overflow: auto;
    /*white-space: nowrap;*/
    /*display: inline-block;*/
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
  }
  .wrapNoOverflow {
    overflow: hidden;
  }
  .pauseOnHover:hover .text {
    animation-play-state: paused
  }
  .content {
    width: 100000px;
  }
  .text {
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
    display: inline-block;
  }
  .paused .text {
    animation-play-state: paused
  }
  @keyframes animation {
    0% { transform:translateX(0); }
    100% { transform:translateX(-100%); }
  }
</style>
