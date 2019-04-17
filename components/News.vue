<template lang="html">
  <section class="padding sides">
    <h1>{{ data.sectionName }}</h1>
  </section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css" scoped>

section {
  background: #222;
  color: white;
}
</style>
