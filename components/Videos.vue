<template lang="html">
  <section :id="data.id">
    <h1 :id="data.id">{{ data.sectionName }}</h1>
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
