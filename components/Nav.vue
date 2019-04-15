<template lang="html">
  <nav :class="{ sticky, open, transition }">
    <div class="nav-wrapper site-width">
      <div class="menu-button" @click="setMenu(!open)">
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
      <div class="nav-items">
        <template v-for="(section, index) in data">
          <a
            class="nav-item"
            href="#"
            v-scroll-to="props(section.id, index)"
            @click="setMenu(false)"
            :class="{ active: index === activeSection }"
            :style="{ height }"
          >
            {{ section.sectionName }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sticky: false,
      pause: false,
      activeSection: 0,
      open: false,
      transition: false
    }
  },
  props: {
    data: Array,
    page: Object
  },
  computed: {
    height() {
      return `${this.page.navHeight}px`
    },
    elements() {
      return this.data.map(s => document.getElementById(s.id))
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    setMenu(state) {
      this.transition = true
      this.open = state
      setTimeout(() => (this.transition = false), 500)
    },
    onScroll() {
      this.checkSticky()
      if (!this.pause) this.checkActiveSection()
    },
    onStart(index) {
      this.activeSection = index
      this.pause = true
      if (index > 0) this.sticky = true
    },
    onDone() {
      this.pause = false
    },
    checkSticky() {
      this.sticky = window.scrollY > 0
    },
    checkActiveSection() {
      this.elements.some((el, index) => {
        if (el.getBoundingClientRect().bottom > this.page.navHeight) {
          this.activeSection = index
          return true
        }
        return false
      })
    },
    props(id, index) {
      return {
        el: `#${id}`,
        duration: 1000,
        onStart: () => this.onStart(index),
        onDone: this.onDone,
        easing: 'ease'
      }
    }
  }
}
</script>

<style lang="css" scoped>
nav{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}

nav.sticky{
  position: fixed;
}

.nav-items{
  display: flex;
  flex-direction: column;
}

.nav-item{
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #999;
  font-size: 1em;
  font-weight: 500
}

.nav-item.active{
  color: #222
}

.menu-button{
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1;
}

.line{
  height: 2px;
  width: 20px;
  background: #999;
  margin: 3px 0px;
}

@media screen and (max-width:600px){

  .transition .nav-items{
    transition: transform .5s, opacity .25s;
  }

  .nav-items{
    transform: scale(0);
    transform-origin: top right;
    position: fixed;
    left: 0px;
    right: 0px;
    opacity: 0;
  }

  .open .nav-items{
    transform: scale(1);
    opacity: 1;
    border: 1px solid #eee;
    box-shadow: 0px 2px 2px rgba(0,0,0,.1);
    background: white;
    padding: 0px 30px;
  }

  .nav-items .nav-item{
    height: 70px;
    border-bottom: 1px solid #eee;
  }

  .nav-item:last-child{
    border-bottom: 0px;
  }

}

@media screen and (min-width: 601px) {

  .nav-wrapper{
    transition: background .25s, box-shadow .5s;
  }

  .sticky .nav-wrapper{
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background: rgba(255,255,255,.9);
    box-shadow: 0px 2px 2px rgba(0,0,0,.1)
  }

  .menu-button{
    display: none;
  }

  .nav-items{
    flex-direction: row;
    justify-content: center;
    height: 100%;
  }

  .nav-item{
    padding: 0px 20px;
  }
}
</style>
