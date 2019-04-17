<template lang="html">
  <div id="modal" :class="{ open: modal.link, transition }" @click="clicked">
    <svg
      class="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      @click="$store.commit('unsetModal')"
    >
      <line class="cls-1" x1="1" y1="51" x2="51" y2="1" />
      <line class="cls-1" x1="51" y1="51" x2="1" y2="1" />
    </svg>

    <div class="video-container">
      <div class="video-ratio video"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transition: false
    }
  },
  computed: {
    modal() {
      return this.$store.state.modal
    }
  },
  watch: {
    modal() {
      this.transition = true
      setTimeout(() => (this.transition = false), 500)
    }
  },
  methods: {
    clicked(event) {
      if (event.path[0].id === 'modal') {
        this.$store.commit('unsetModal')
      }
    }
  }
}
</script>

<style lang="css" scoped>

#modal{
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  background: rgba(0,0,0,0);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal.open{
  z-index: 3;
  background: rgba(0,0,0,.9);
  opacity: 1
}

#modal.transition{
  z-index: 3;
  transition: background .5s, opacity .5s
}


.button{
  position: absolute;
  top: 5vw;
  left: 5vw;
  transition: transform .25s;
  width: 50px;
  padding: 10px;
}

.button:active{
  transform: scale(.9)
}

.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}

.video{
  background: #ccc
}

.video-container{
  width: 100vw;
  max-width: 140vh;
}

@media screen and (min-width: 800px){
  .video-container{
    width: 85vw;
  }

  .button{
    top: 40px;
    left: 40px;
  }
}
</style>
