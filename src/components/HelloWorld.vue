<template lang="pug">
  div
    h1 Pages
    router-link(:to="{name: 'page.files'}") List files
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .test
    color green
</style>
