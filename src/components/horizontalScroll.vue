<script>
export default {
  name: 'horizontalScroll',
  functional: true,
  props: {
    duration: {
      type: Number,
      default: 15
    },
    repeat: {
      type: Number,
      default: 2,
      validator: function (val) {
        return val >= 2
      }
    },
    paused: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },
  // methods: {
  //   pauseAnimation: function () {
  //     this.props.paused = true
  //   }
  // },
  render (h, { $style, props: { duration, repeat, paused, pauseOnHover }, children, data: { staticClass, key } }) {
    const text = h('div', {
      class: $style.text,
      style: {
        animationDuration: `${duration}s`
      }
    }, children)
    return h('div', {
      key,
      on: {
        mouseover: function (event) {
          console.log(staticClass)
        }
      },
      class: [
        staticClass,
        $style.wrap,
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
    /*overflow: hidden;*/
    white-space: nowrap;
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
    padding-right: 80px;
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
