<template lang="pug">
    #labs
      h1 All Labs
      template(v-for="node in nodes")
        section.sectionLab
          HorizontalScroll(:repeat="8"
            :duration="(Math.random() + 2) * 10"
            :paddingRight="250")
            router-link.noUnderline(:to="{name: 'page.lab', params: { nid: node.nid }}")
              ovalSpace
                h3.scrolltext {{node.city}}
                span.scrolltextTop {{node.year}}
          p(v-html="node.body.value")
          div(v-for="img in node.field_images_2")
            img(v-if="img.file.id in imgs" :src="imgs[img.file.id].path")
</template>

<script>
import HorizontalScroll from './horizontalScroll'
import ovalSpace from './ovalSpace'
export default {
  name: 'nodes',
  components: {HorizontalScroll, ovalSpace},
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
    this.nodes.forEach(n => {
      n.field_images_2.forEach(async i => {
        console.log(i.file.id)
        const id = i.file.id
        const response = await this.$store.dispatch('drupal/getImgPath', id)
        const file = response.data.files[0].file
        this.$set(this.imgs, id, file)
      })
    })
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
  .noUnderline
    text-decoration none
  p
    line-height 1.25
  h3
    font-size 1.5rem
    margin 0.2rem 0
  .sectionLab
    margin-top 3rem
  .divider
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
    outline: 1px solid var(--main-border-color)
  .scrolltext
    margin 0
    line-height 1
  .scrolltextTop
    position relative
</style>
