<template lang="html">
  <section>
    {{ data.sectionName }}
  </section>
</template>

<script>
import introduction from '@/content/introduction.json'
export default {
  computed: {
    data() {
      return introduction
    }
  }
}
</script>

<style lang="css" scoped></style>
