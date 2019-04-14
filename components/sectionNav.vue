<template lang="html">
  <div
    class="section-nav nav-height"
    :class="{ sticky, unstick }"
    ref="sectionNav"
  >
    <template v-for="(section, index) in data">
      <a
        href="#"
        v-scroll-to="{ el: `#${section.id}`, duration: 750 }"
        :class="{ active: section.id === activeSection }"
        @click="setActiveSection(section.id)"
      >
        {{ section.sectionName }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    navActive: String
  },
  data() {
    return {
      sticky: false,
      unstick: false,
      pause: false,
      activeSection: ''
    }
  },
  computed: {
    ids() {
      return this.data.map(item => item.id)
    }
  },
  watch: {
    sticky() {
      if (!this.sticky) {
        this.unstick = true
        setTimeout(() => (this.unstick = false), 300)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let found = this.pause

      this.ids.forEach(id => {
        let el = document.getElementById(id).getBoundingClientRect()

        //active section
        if (el.bottom >= 20 && !found) {
          found = true
          this.activeSection = id
        }
        //turn on nav
        if (id === this.navActive) this.sticky = el.top <= 70
      })
    },
    setActiveSection(id) {
      this.activeSection = id
      this.pause = true
      setTimeout(() => (this.pause = false), 700)
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

.section-nav a{
  text-decoration: none;
  font-size: 1em;
  color: #777;
  padding: 5px 2vw;
}

.section-nav a.active{
  color: #222;
}

.section-nav.sticky, .section-nav.unstick{
  position: fixed;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0,0,0,.1)
}

.section-nav.sticky{
  animation: slideon .25s
}

.section-nav.unstick{
  animation: slideoff .25s forwards
}

@keyframes slideon{
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0%);
  }
}

@keyframes slideoff{
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-100%);
  }
}
</style>
