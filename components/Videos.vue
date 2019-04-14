<template lang="html">
  <section :id="data.id" class="videos">
    videos
  </section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
section {
  height: 100vh;
  min-height: 600px;
}
</style>
