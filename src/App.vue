<template>
  <div id="app">
      <header>
        <h1>Choreographic Coding Labs</h1>
        <nav class="menu">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Labs</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Showcase</a></li>
          </ul>
        </nav>
      </header>
    <div class="left">
      <AFrameStage></AFrameStage>
    </div>
    <div class="right">
      <labList></labList>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AFrameStage from './components/AFrameStage'
import LabList from './components/labList'
export default {
  name: 'App',
  components: {AFrameStage, LabList},
  async mounted () {
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Asar|Quicksand')
  @import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');

  :root, html
    font-size 18px
    font-family 'Space Mono', serif
    color black
    background #e7e7e7

  h1, h2, h3, h4, h5, h6
    font-weight normal
    font-family 'Quicksand', sans-serif

  a, a:hover, a:active, a:visited
    color inherit
    text-decoration underline

  header
    display flex
    align-items baseline
    justify-content space-between
    margin 0 20px

  .menu>ul
    list-style none
    display flex

  .menu>ul li + li
    margin-left: 10px

  .left
    top 0
    position fixed
  .right
    width 55vw
    padding-left 45vw
</style>
