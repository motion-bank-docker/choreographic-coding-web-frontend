<template lang="pug">
    #drawerMachine
      h2 Get Data
      horizontal-scroll(:hideOverflow="true")
        p heeere comes the data
      horizontal-scroll(:hideOverflow="true")
        p wow the data

</template>

<script>
import horizontalScroll from './horizontalScroll'
export default {
  name: 'drawerMachine',
  components: {horizontalScroll},
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
