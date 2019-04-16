<template lang="html">
  <section :id="contact.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ contact.sectionName }}</h1>
  </section>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    contact() {
      return this.data.contact
    }
  }
}
</script>

<style scoped>
section {
  height: 600px;
}
</style>
