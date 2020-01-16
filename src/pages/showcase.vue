<template lang="pug">
    #page-files
      h1 Showcase
      h2 test
      //horizontal-scroll
        p element
      template(v-for="node in nodes")
        //horizontal-scroll
        h3 {{node.title}}
        p(v-html="node.body.value")
        div(v-for="img in node.field_images_2" :key="img.file.id")
          img(v-if="img.file.id in imgs" :src="imgs[img.file.id].path")
</template>

<script>
import horizontalScroll from '../components/horizontalScroll'
export default {
  name: 'showcase',
  components: { horizontalScroll },
  data () {
    return {
      nodes: [],
      imgs: {}
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getShowcases')
    this.nodes = res.data.list
    this.nodes.forEach(n => {
      n.field_images_2.forEach(async i => {
        console.log(i.file.id)
        const id = i.file.id
        const response = await this.$store.dispatch('drupal/getImgPath', id)
        const file = response.data.files[0].file
        this.$set(this.imgs, id, file)
      })
    })
    console.log(this.imgs)
  }
}
</script>

<style scoped lang="stylus"></style>
