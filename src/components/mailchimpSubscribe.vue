<template lang="pug">
  form.mailchimpSignup(@submit.prevent='subscribe')
    label(for="email") Email
    input(type='email'
      id="email"
      required autocorrect="off" autocapitalize="off" spellcheck="false"
      @input='setEmail($event.target.value)'
      placeholder="Email Address")
    lable(for="firstname") First Name
    input(type='text'
      id="firstname"
      required autocorrect="off" autocapitalize="off" spellcheck="false"
      v-model="firstName"
      placeholder="First Name")
    lable(for="lastename") Last Name
    input(type='text'
      id="lastename"
      required autocorrect="off" autocapitalize="off" spellcheck="false"
      v-model="lastName"
      placeholder="Last Name")
    button(type='submit') Submit
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
    font-size 0.7em
  input, button
    font-size inherit
    font-family inherit
    padding 0.5rem
    border 2px solid #000
    min-height 1.5rem
    margin-bottom 0.5rem
  input
    background var(--overlay-bg-color)
  button
    font-size inherit
    color white
    background black
  input:focus, button:focus
    outline: 3px solid #323232
    outline-offset: 2px
  input:valid
    /*border 2px solid green*/
</style>
