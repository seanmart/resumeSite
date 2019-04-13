<template lang="html">
  <div :class="['section-nav', { show, fixed, animate }]" ref="sectionNav">
    <template v-for="item in data">
      <span>{{ item.sectionName }}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    show: { type: Boolean, default: false }
  },
  data() {
    return {
      fixed: false,
      animate: false
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
      if (window.scrollY > this.$refs.sectionNav.clientHeight) {
        this.fixed = true
        setTimeout(() => (this.animate = true), 10)
      } else {
        this.animate = false
        this.fixed = false
      }
    }
  }
}
</script>

<style lang="css">
.section-nav{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: rgba(#fff, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-nav.animate{
  transition: .25s;
}

.section-nav.fixed{
  position: fixed;
  background: #fff;
  transform: translateY(-100%);
}

.section-nav.show{
  transform: translateY(0%);
  box-shadow: 0px 2px 5px rgba(0,0,0,.05)
}
</style>
