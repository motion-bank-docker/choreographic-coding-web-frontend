<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted () {
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Asar|Quicksand')

  :root, html
    font-size 18px
    font-family 'Asar', serif

  h1, h2, h3, h4, h5, h6
    font-family 'Quicksand', sans-serif

  a, a:hover, a:active, a:visited
    color inherit
    text-decoration underline
</style>
