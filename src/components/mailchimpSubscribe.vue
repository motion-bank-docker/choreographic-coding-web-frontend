<template lang="pug">
  form.mailchimpSignup(@submit.prevent='subscribe')
    input(type='email' @input='setEmail($event.target.value)' placeholder="Email Address")
    input(type='text' v-model="firstName" placeholder="First Name")
    input(type='text' v-model="lastName" placeholder="Last Name")
    button(type='submit') Submit
    p {{firstName}}
    div(v-if='error') {{ error }}
    div(v-if='success') Yay!
    div(v-if='loading') Loading&mldr;
</template>
<script>
import jsonp from 'jsonp'
import queryString from 'query-string'

export default {
  props: {
    url: {
      required: true,
      type: String
    },

    userId: {
      required: true,
      type: String
    },

    listId: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      email: null,
      firstName: null,
      lastName: null,
      success: false,
      error: null,
      loading: false
    }
  },

  computed: {
    data () {
      return queryString.stringify({
        u: this.userId,
        id: this.listId,
        EMAIL: this.email,
        FNAME: this.firstName,
        LNAME: this.lastName
      })
    }
  },

  methods: {
    setEmail (value = '') {
      this.email = value.trim()
    },

    subscribe () {
      if (this.email === null || this.loading) {
        return
      }

      this.success = false
      this.error = null
      this.loading = true

      const url = `${this.url}?${this.data}`

      jsonp(url, { param: 'c' }, this.onResponse)
    },

    onResponse (error, data) {
      this.loading = false

      if (error) {
        this.error = error
      }

      if (data && data.result === 'error') {
        this.error = this.formatErrorMessage(data.msg)
      }

      if (this.error) {
        this.$emit('error', this.error)
      } else {
        this.success = true
        this.email = null
        this.$emit('success')
      }
    },

    formatErrorMessage (message) {
      return message.replace('0 - ', '')
    }
  },

  render () {
    return this.$scopedSlots.default({
      subscribe: this.subscribe,
      setEmail: this.setEmail,
      firstName: this.firstName,
      error: this.error,
      success: this.success,
      loading: this.loading
    })
  }
}
</script>

<style scoped lang="stylus">
  .mailchimpSignup
    margin-top 1rem
    display flex
    flex-direction column
  input
    border 2px solid #000
    height 1.5rem
    margin-bottom 0.5rem
</style>
