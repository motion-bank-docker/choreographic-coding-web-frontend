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
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans|Contrail+One')

  :root, html
    font-size 18px
    font-family 'Alegreya Sans', sans-serif

  h1, h2, h3, h4, h5, h6
    font-family 'Contrail One', cursive

  a, a:hover, a:active, a:visited
    color inherit
    text-decoration underline
</style>
