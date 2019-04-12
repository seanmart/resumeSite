<template lang="html">
  <section>
    {{ data.sectionName }}
  </section>
</template>

<script>
import introduction from '@/static/content/introduction.json'
export default {
  computed: {
    data() {
      return introduction
    }
  }
}
</script>

<style lang="css" scoped></style>
