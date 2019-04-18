<template lang="html">
  <header :class="{ scrolled, open, transition }">
    <nav class="site-width" :style="mobileMenuHeight">
      <ul>
        <li class="menu" @click="open = !open">
          <div />
          <div />
          <div />
        </li>
        <li v-for="section in sections">
          <a
            href="#"
            v-scroll-to="setScroll(section.id)"
            @click="active = section.id"
            :class="{ active: is('a', section.id) }"
            :style="{ height: navHeight }"
          >
            {{ section.sectionName }}
          </a>
        </li>
      </ul>
    </nav>
    <div class="backdrop" @click="open = false" />
  </header>
</template>

<script>
import { filter } from 'lodash'
export default {
  data() {
    return {
      scrolled: false,
      open: false,
      active: null,
      mobile: false,
      transition: false,
      cancelSetActive: false,
      offset: 0
    }
  },
  props: ['data', 'page'],
  mounted() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.handleResize()
    this.handleScroll()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    sections() {
      return filter(this.data, 'id')
    },
    mobileMenuHeight() {
      if (!this.mobile || !this.open) return {}
      return { height: `${this.sections.length * this.page.navHeight}px` }
    },
    navHeight() {
      return `${this.page.navHeight}px`
    },
    elements() {
      return this.sections.map(s => ({
        el: document.getElementById(s.id),
        id: s.id
      }))
    }
  },
  watch: {
    open(to, from) {
      this.transition = true
      setTimeout(() => (this.transition = false), 500)
    },
    active() {
      this.open = false
    }
  },
  methods: {
    start() {
      this.cancelSetActive = true
    },
    done() {
      this.cancelSetActive = false
    },
    close() {
      this.open = false
    },
    handleResize() {
      this.mobile = window.innerWidth <= 600
      this.offset = window.innerWidth <= 600 ? 0 : 0 - this.page.navHeight
    },
    handleScroll() {
      this.checkScroll()
      !this.cancelSetActive && this.checkActive()
    },
    checkScroll() {
      this.scrolled = window.scrollY > 0
    },
    checkActive() {
      this.elements.some(item => {
        if (item.el.getBoundingClientRect().bottom > this.page.navHeight) {
          this.active = item.id
          return true
        }
        return false
      })
    },
    is(caller, val) {
      switch (caller) {
        case 'a':
          return val === this.active
      }
    },
    setScroll(el) {
      return {
        el: `#${el}`,
        duration: 1000,
        easing: 'ease',
        onStart: this.start,
        onDone: this.done,
        offset: this.offset
      }
    }
  }
}
</script>

<style lang="css" scoped>
header {
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
}

nav {
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

.scrolled nav{
  box-shadow: 0px 0px 3px rgba(0,0,0,.15)
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0px;
}

li {
  flex: 0 0 auto;
  list-style: none
}

a{
  text-decoration: none;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-weight: 500;
  transition: color .25s
}

a.active{
  color: #222
}

.menu{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 46px;
  width: 51px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.menu div{
  flex: 0 0 auto;
  background: #999;
  height: 2px;
}

@media screen and (max-width:600px){

  .open .backdrop{
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    z-index: -1
  }

  header{
    margin: 5vw;
  }

  .menu{
    padding: 15px
  }

  nav{
    margin: 0px;
    border-radius: 3px;
    height:46px;
    width: 51px;
    padding: 0px 15px;
  }

  .open nav{
    background: white;
    width: 100%;
    box-shadow: 0px 0px 5px rgba(0,0,0,.25)
  }

  .transition ul, .transition nav,.transition.open a{
    transition: .5s
  }

  .transition a{
    transition: .25s
  }

  a{
    opacity: 0;
    font-size: 1.1em;
  }

  .open a{
    opacity: 1
  }

  li{
    display: block;
  }

  li a{
    border-bottom: 1px solid #eee;
  }

  li:last-child a{
    border-bottom: none;
  }

}

@media screen and (min-width: 601px){
  .menu{display:none;}

  ul{
    flex-direction: row;
    justify-content: center;
  }
}
</style>
