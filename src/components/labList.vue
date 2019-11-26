<template lang="pug">
    #labs
      h1 All Labs
      template(v-for="node in nodes")
        h3 {{node.title}}
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
    this.nodes = res.data.list
    let imgsMap = {}
    this.nodes.forEach(n => {
      n.field_images_2.forEach(async i => {
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

<style scoped lang="stylus"></style>
