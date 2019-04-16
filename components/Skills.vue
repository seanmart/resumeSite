<template lang="html">
  <section :id="data.id" class="padding">
    <h1>{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="skill in data.skills">
        <div class="skill"></div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
section {
  height: 400px;
}
</style>
