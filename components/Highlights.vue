<template lang="html">
  <section :id="data.id">
    highlights
  </section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
section {
  height: 600px;
}
</style>
