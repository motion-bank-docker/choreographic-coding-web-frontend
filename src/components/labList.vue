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
    this.nodes = res.data.list
  }
}
</script>

<style scoped lang="stylus"></style>
