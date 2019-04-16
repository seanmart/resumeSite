<template lang="html">
  <section :id="data.id" class="padding">
    <h1>{{ data.sectionName }}</h1>
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
}
</style>
