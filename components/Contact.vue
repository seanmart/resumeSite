<template lang="html">
  <section :id="data.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
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
