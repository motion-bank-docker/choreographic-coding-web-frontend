<template lang="pug">
    #labs
      h1 All Labs
      template(v-for="node in nodes")
        h3 {{node.title}}
        p(v-html="node.body.value")
</template>

<script>
export default {
  name: 'nodes',
  data () {
    return {
      nodes: []
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getProjects')
    const nodesList = res.data.list
    const nodesListWithImg = nodesList.map(function (node) {
      if (node.field_images_2.length >= 1) {
        const resimg = await this.$store.dispatch('drupal/getProjects')
      }
    })
    this.nodes = res.data.list
  }
}
</script>

<style scoped lang="stylus"></style>
