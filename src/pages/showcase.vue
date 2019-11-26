<template lang="pug">
    #page-files
      h1 Showcase
      h2 test
      p element
      template(v-for="node in nodes")
        h3 {{node.title}}
        p(v-html="node.body.value")
</template>

<script>
export default {
  name: 'showcase',
  data () {
    return {
      nodes: []
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getNodes')
    this.nodes = res.data.list
  }
}
</script>

<style scoped lang="stylus"></style>
