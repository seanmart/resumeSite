<template lang="html">
  <header :class="{ scrolled, open, transition }">
    <nav :style="mobileMenuHeight">
      <ul>
        <li class="menu" @click="set('menu')">
          <div />
          <div />
          <div />
        </li>
        <li v-for="(section, index) in data">
          <a
            href="#"
            v-scroll-to="set('v-scroll', section.id)"
            @click="set('a', index)"
            :class="{ active: is('a', index) }"
            :style="{ height: navHeight }"
          >
            {{ section.sectionName }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolled: true,
      open: false,
      active: 0,
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
    mobileMenuHeight() {
      if (!this.mobile || !this.open)
        return { maxWidth: `${this.page.siteWidth}px` }
      return { height: `${this.data.length * this.page.navHeight}px` }
    },
    navHeight() {
      return `${this.page.navHeight}px`
    },
    elements() {
      return this.data.map(s => document.getElementById(s.id))
    }
  },
  watch: {
    open() {
      this.transition = true
      setTimeout(() => (this.transition = false), 500)
    }
  },
  methods: {
    start() {
      this.cancelSetActive = true
    },
    done() {
      this.cancelSetActive = false
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
      this.elements.some((el, index) => {
        if (el.getBoundingClientRect().bottom > this.page.navHeight) {
          this.active = index
          return true
        }
        return false
      })
    },
    style(caller) {
      switch (caller) {
      }
    },
    is(caller, val) {
      switch (caller) {
        case 'a':
          return val === this.active
      }
    },
    set(caller, val) {
      switch (caller) {
        case 'a':
          this.active = val
          this.open = false
          break
        case 'v-scroll':
          return {
            el: `#${val}`,
            duration: 1000,
            easing: 'ease',
            onStart: this.start,
            onDone: this.done,
            offset: this.offset
          }
        case 'menu':
          this.open = !this.open
          break
      }
    }
  }
}
</script>

<style lang="css" scoped>
header {
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
  header{
    margin: 10px;
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
    opacity: 0
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
