<template lang="pug">
    #labs
      h1 All Labs
      template(v-for="node in nodes")
        section.sectionLab
          div
            HorizontalScroll(:repeat="12" :duration="(Math.random() + 1) * 2" :reverseDirection="Math.random() < 0.5" )
              h3 {{node.year}}
          HorizontalScroll(:repeat="8" :duration="(Math.random() + 1) * 2" :reverseDirection="Math.random() < 0.5" )
            router-link(:to="{name: 'page.lab', params: { nid: node.nid }}")
              h3 {{node.city}}
          p(v-html="node.body.value")
          div(v-for="img in node.field_images_2")
            img(v-if="img.file.id in imgs" :src="imgs[img.file.id].path")
</template>

<script>
import HorizontalScroll from './horizontalScroll'
export default {
  name: 'nodes',
  components: {HorizontalScroll},
  data () {
    return {
      nodes: [],
      imgs: {}
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getLabs')
    // this.nodes = res.data.list
    this.nodes = res.data.list.map(node => {
      return {
        ...node,
        year: node.title.match(/\d{4}/gm)[0],
        city: node.title.replace(/.\d{4}/gm, '')
      }
    })
    let imgsMap = {}
    this.nodes.forEach(n => {
      n.field_images_2.forEach(async i => {
        console.log(i.file.id)
        const id = i.file.id
        const response = await this.$store.dispatch('drupal/getImgPath', id)
        const file = response.data.files[0].file
        imgsMap[id] = file
      })
    })
    console.log(imgsMap)
    this.imgs = imgsMap
  },
  methods: {
    loadImage: async function (id) {
      const resImg = await this.$store.dispatch('drupal/getImgPath', id)
      let file = resImg.data.files[0].file
      console.log(file.path)
      return file
    }
  }
}
</script>

<style scoped lang="stylus">
  p
    line-height 1.25
  h3
    margin 0.2rem 0
  .sectionLab
    margin-top 3rem
</style>
