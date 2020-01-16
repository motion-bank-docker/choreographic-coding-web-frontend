<template lang="pug">
    #drawerFuture
      h2 Future
      p Future Projects / Plans / Goals
      p shape the future with us (da email)
      textarea
      mailchimp-subscribe(url='https://choreographiccoding.us8.list-manage.com/subscribe/post-json'
        user-id='5b3dec718900ad84210c545ac'
        list-id='24abe7a566'
        @error='onError'
        @success='onSuccess')
        template(v-slot='{ subscribe, setEmail, firstName, error, success, loading }')
          form(@submit.prevent='subscribe')
            input(type='email' @input='setEmail($event.target.value)')
            input(type='text' v-bind:value="firstName")
            button(type='submit') Submit
            div(v-if='error') {{ error }}
            div(v-if='success') Yay!
            div(v-if='loading') Loading&mldr;
</template>

<script>
import mailchimpSubscribe from './mailchimpSubscribe'
export default {
  components: {
    mailchimpSubscribe
  },
  name: 'drawerFuture',
  data () {
    return {
      nodes: [],
      imgs: {}
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getCalls')
    this.nodes = res.data.list
    let imgsMap = {}
    this.nodes.forEach(n => {
      n.field_images_2.forEach(async i => {
        const id = i.file.id
        const response = await this.$store.dispatch('drupal/getImgPath', id)
        const file = response.data.files[0].file
        imgsMap[id] = file
      })
    })
    console.log(imgsMap)
    this.imgs = imgsMap
  },
  methods: {
    onError (e) {
      console.log(e)
    },
    onSuccess (e) {
      console.log(e)
    },
    loadImage: async function (id) {
      const resImg = await this.$store.dispatch('drupal/getImgPath', id)
      let file = resImg.data.files[0].file
      console.log(file.path)
      return file
    },
    closeAllDrawer: function () {
      this.$store.commit('drawer/closeAllDrawer')
    },
    getTime: function (unixTime) {
      let date = new Date(unixTime * 1000)
      return date.toLocaleString('de-DE', { timeZone: 'UTC' })
    }
  }
}
</script>

<style scoped lang="stylus">
  .imgPlaceholder
    width 100%
    height 4rem
    background white
</style>
