<template lang="pug">
    #drawerPast
      h2 All Labs
      template(v-for="node in reverseLabs")
        router-link(:to="{name: 'page.lab', params: { nid: node.nid }}")
          ovalSpace(:randomRotate="true")
            h3 {{node.title}}
        //div.imgPlaceholder
        //p(v-html="node.body.value")
        //div(v-for="img in node.field_images_2")
          img(v-if="img.file.id in imgs" :src="imgs[img.file.id].path")
</template>

<script>
import ovalSpace from './ovalSpace'

export default {
  name: 'drawerPast',
  components: {ovalSpace},
  data () {
    return {
      nodes: [],
      imgs: {}
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getLabs')
    this.nodes = res.data.nodes
    // let imgsMap = {}
    // this.nodes.forEach(n => {
    //   n.field_images_2.forEach(async i => {
    //     const id = i.file.id
    //     const response = await this.$store.dispatch('drupal/getImgPath', id)
    //     const file = response.data.files[0].file
    //     imgsMap[id] = file
    //   })
    // })
    // console.log(imgsMap)
    // this.imgs = imgsMap
  },
  computed: {
    reverseLabs () {
      return this.nodes.slice().reverse()
    }
  },
  methods: {
    loadImage: async function (id) {
      const resImg = await this.$store.dispatch('drupal/getImgPath', id)
      let file = resImg.data.files[0].file
      console.log(file.path)
      return file
    },
    closeAllDrawer: function () {
      this.$store.commit('drawer/closeAllDrawer')
    },
    getTime: function (unixTime) {
      let date = new Date(unixTime * 1000)
      return date.toLocaleString('de-DE', { timeZone: 'UTC' })
    }
  }
}
</script>

<style scoped lang="stylus">
  .imgPlaceholder
    width 100%
    height 4rem
    background white
</style>
