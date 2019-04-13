<template lang="html">
  <div ref="trigger" />
</template>

<script>
export default {
  props: {
    onEnter: Boolean,
    onLeave: Boolean
  },
  data() {
    return {
      state: false
    }
  },
  watch: {
    state() {
      this.$emit('trigger', this.state)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.state = this.$refs.trigger.getBoundingClientRect().top <= 0
    }
  }
}
</script>

<style lang="css"></style>
