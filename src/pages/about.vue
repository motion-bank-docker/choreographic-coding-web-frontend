<template lang="pug">
    #page-about
      h1 {{node.title}}
      p(v-html="node.body.value")
</template>

<script>
import horizontalScroll from '../components/horizontalScroll'
export default {
  name: 'about',
  components: { horizontalScroll },
  data () {
    return {
      node: false
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getPage', 57)
    this.node = res.data
    console.log(this.node)
  }
}
</script>

<style scoped lang="stylus"></style>
