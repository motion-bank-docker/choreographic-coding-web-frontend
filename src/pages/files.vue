<template lang="pug">
    #page-files
      h1 All files
      template(v-for="file in files")
        div {{file.fid}} {{file.filename}}
          img(:src="file.path", style="max-width: 100px; max-height: 100px")
</template>

<script>
export default {
  name: 'files',
  data () {
    return {
      files: []
    }
  },
  async mounted () {
    const res = await this.$store.dispatch('drupal/getFiles', {items_per_page: 'All'})
    this.files = res.data.files.map(f => {
      return f.file
    })
  }
}
</script>

<style scoped lang="stylus"></style>
