<template lang="html">
  <nav :class="{ sticky, unstick }" :style="heightStyle">
    <template v-for="(section, index) in data">
      <a
        href="#"
        :style="[heightStyle, { animationDuration: `${0.5 + index / 4}s` }]"
        :class="{ active: section.id === activeSection }"
        @click="setSection(section.id)"
        v-scroll-to="{
          el: `#${section.id}`,
          duration: 750,
          onStart: () => setScroll(true),
          onDone: () => setScroll(false)
        }"
      >
        {{ section.sectionName }}
      </a>
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    data: Array,
    trigger: { type: String, default: null },
    height: Number
  },
  data() {
    return {
      sticky: false,
      unstick: false,
      activeSection: null,
      scrolling: false
    }
  },
  computed: {
    heightStyle() {
      return { height: `${this.height}px` }
    },
    els() {
      let elements = {}
      this.data.forEach(
        item => (elements[item.id] = document.getElementById(item.id))
      )
      return elements
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
      if (this.trigger) this.checkTrigger()
      if (this.data.length > 0 && !this.scrolling) this.checkActiveSection()
    },
    checkActiveSection() {
      this.data.some(item => {
        let el = this.els[item.id].getBoundingClientRect()
        if (el.bottom >= this.height) {
          this.setSection(item.id)
          return true
        }
        return false
      })
    },
    checkTrigger() {
      if (this.trigger) {
        let el = this.els[this.trigger].getBoundingClientRect()
        this.sticky = el.top <= this.height
      }
    },
    setSection(id) {
      this.activeSection = id
    },
    setScroll(state) {
      this.scrolling = state
    }
  }
}
</script>

<style scoped>
nav {
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: rgba(#fff, 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
}

a {
  text-decoration: none;
  font-size: 1em;
  color: #777;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s font-weight 0.25s;
  animation: fadeon forwards;
}

a.active {
  color: #222;
  order: -1;
}

.sticky,
.unstick {
  position: fixed;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}

.sticky {
  animation: slideon 0.25s;
}

.unstick {
  animation: slideoff 0.25s forwards;
}

@media screen and (min-width: 600px) {
  nav {
    flex-direction: row;
    justify-content: center;
  }

  a {
    width: 120px;
    animation: slideon forwards;
  }

  a.active {
    order: initial;
  }
}
</style>
