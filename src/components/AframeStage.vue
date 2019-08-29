<template lang="pug">
  #aframe-stage
    a-scene(background='color: #e7e7e7' embedded)
      a-assets
        img(id="checker" src="/static/checker_huge_grey.gif")
      a-curve#track1(type="CatmullRom")
        a-curve-point(position="-8 15 -2")
        a-curve-point(position="-1 1 -3")
        a-curve-point(position="0 1.5 2")
        a-curve-point(position="3 -1 -1")
      a-entity#plane(v-on:click="rotatePlane" position='0 0 -4')
        a-plane(rotation='-90 0 0' width='5' height='5' color='#fefefe' material='shader: flat; side: double' wireframe='false')
        a-entity(geometry='primitive: plane; width: 5; height: 3'
          text='value: the distance between the backstage and the front stage \n' +
                'the distance between the detail and the complete settings \n' +
            'the distance between the body and the space' position='0 1 -2' material='shader: flat; color: grey')
        a-box(position="2 0 0" width="2" material='src: #checker; repeat: 6 5')
        //a-entity(geometry="primitive: box" material="src: #checker")

        a-plane(position="4.5 1.5 0" rotation='-10 -25 0' width='6' height='6' color='#fefefe' material='shader: flat; side: double; src: #checker; repeat: 5 5')

        a-light(type="ambient" color="#445451")
        a-light(type="point" intensity="1" position="2 4 4")

        a-draw-curve(curveref="#track1" material="shader: line; color: blue;")
        a-entity(clone-along-curve="curve: #track1; spacing: 0.01; scale: 1 1 1; rotation: 0 0 0;" geometry="primitive:box; height:0.1; width:0.2; depth:0.1" material='color: red')
      a-entity(cursor='rayOrigin: mouse')
</template>

<script>
export default {
  name: 'AFrameStage',
  props: {
    scene: 0
  },
  data () {
    return {
      rotation: 0
    }
  },
  methods: {
    rotatePlane: function (event) {
      this.rotation += 90
      console.log(event.target)
      const plane = document.querySelector('#plane')
      this.$emit('update:scene', this.rotation)
      plane.setAttribute('animation', `property: rotation; to: 0 ${this.rotation} 0; loop: false; dur: 500`)
      let path = document.querySelector('#track1')
      let newPt = document.createElement('a-curve-point')
      newPt.setAttribute('position', `${Math.random() * 10 - 5} ${Math.random() * 10 - 5} ${Math.random() * 10 - 5}`)
      path.appendChild(newPt)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #aframe-stage {
    height: 80vh;
  }
</style>
