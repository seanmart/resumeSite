<template lang="html">
  <div id="modal" :class="{ open: modal.data, transition }">
    <svg
      class="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      @click="$store.commit('unsetModal')"
    >
      <line class="cls-1" x1="1" y1="51" x2="51" y2="1" />
      <line class="cls-1" x1="51" y1="51" x2="1" y2="1" />
    </svg>

    <div class="video-container" v-if="modal.type === 'video'">
      <div class="video-ratio video">
        <div
          class="poster"
          v-if="!modal.data.link"
          :style="img(modal.data.poster)"
        />

        <iframe
          v-if="modal.data.link"
          :src="modal.data.link"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="backdrop" @click="$store.commit('unsetModal')" />
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
    clicked() {
      this.$store.commit('unsetModal')
    },
    img(poster) {
      if (!poster) return
      return { backgroundImage: `url(${poster})` }
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

.open .backdrop{
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  z-index: -1
}

.button{
  position: absolute;
  top: 5vw;
  left: 5vw;
  transition: transform .25s;
  width: 50px;
  padding: 10px;
  z-index: 1
}

.button:active{
  transform: scale(.9)
}

.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}

.video-container{
  width: 100vw;
  max-width: 140vh;
}

.video{
  position: relative;
}

.poster{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-size: cover;
}

.video iframe{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
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
