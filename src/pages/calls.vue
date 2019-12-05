<template lang="pug">
    #page-files
      h1 Calls
      //horizontal-scroll
        p element
      template(v-for="node in nodes")
        //horizontal-scroll
        h3 {{node.title}}
        p(v-html="node.body.value")
</template>

<script>
import horizontalScroll from '../components/horizontalScroll'
export default {
  name: 'showcase',
  components: { horizontalScroll },
  data () {
    return {
      nodes: []
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getCalls')
    this.nodes = res.data.list
  }
}
</script>

<style scoped lang="stylus"></style>
