<template lang="pug">
    #lab
      div(v-if="loading")
        p loading…
      div(v-if="lab")
        h2 {{lab.title}}
        p(v-html="lab.body.value")
        p {{getTime(lab.field_date.value)}}
        p {{getTime(lab.field_date.value2)}}
        h4 Participants
        template(v-for="participants in lab.field_participants")
          li {{participants}}
        h4 Support
        template(v-for="supporter in lab.field_supported_by")
          li {{supporter}}
        div(v-if="imgsLoaded")
          p image Loaded
          div(v-for="img in imgs")
            img(:src="img.path")
</template>

<script>
export default {
  name: 'lab',
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
    this.lab = res.data
    let imgsArr = []
    this.lab.field_images_2.forEach(async i => {
      const id = i.file.id
      const response = await this.$store.dispatch('drupal/getImgPath', id)
      const file = response.data.files[0].file
      imgsArr.push(file)
    })
    console.log(imgsArr)
    this.imgs = imgsArr
    if (imgsArr.length > 0) { this.imgsLoaded = true }
  }
}
</script>

<style scoped lang="stylus">
  img
    width 100%
</style>
