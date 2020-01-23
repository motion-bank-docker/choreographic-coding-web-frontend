<template lang="pug">
    #lab
      div(v-if="loading")
        p loading…
      div(v-if="lab")
        div.headerImg
        horizontal-scroll(:repeat="6")
          h2 {{lab.title}}
        p(v-html="lab.parsedBody")
        p {{lab.date}}
        h4 Participants
        template(v-for="participants in lab.participants")
          li {{participants}}
        h4 Support
        template(v-for="supporter in lab.supported_by")
          li {{supporter}}
        // div(v-if="imgsLoaded")
          p image Loaded
          div(v-for="img in imgs")
            img(:src="img.path")
</template>

<script>
import horizontalScroll from '../components/horizontalScroll'
const json = require('locutus/php/json')
export default {
  name: 'lab',
  components: { horizontalScroll },
  data () {
    return {
      loading: true,
      lab: null,
      imgsLoaded: false,
      imgs: null
    }
  },
  methods: {
    getTime: function (unixTime) {
      let date = new Date(unixTime * 1000)
      return date.toLocaleString('de-DE', { timeZone: 'UTC' })
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getLab', this.$route.params.nid)
    this.loading = false
    console.log(res)
    this.lab = res.data.nodes[0].node
    this.lab.parsedBody = json.json_decode(this.lab.body)
    this.lab.supported_by = this.lab.supported_by.split(',')
    const resParticipants = await this.$store.dispatch('drupal/getLabParticipants', this.$route.params.nid)
    console.log(resParticipants)
  }
}
</script>

<style scoped lang="stylus">
  .headerImg
    height 40vh
    background lightgray
  img
    width 100%
</style>
