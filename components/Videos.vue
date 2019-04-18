<template lang="html">
  <section :id="data.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="video in data.list">
        <div class="video-container" @click="selectVideo(video)">
          <div class="video-ratio video">
            <svg
              class="play"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70.35 79.8"
            >
              <path
                d="M0,39.9V4.66a4.65,4.65,0,0,1,7-4L37.5,18.25,68,35.87a4.66,4.66,0,0,1,0,8.06L37.5,61.55,7,79.17a4.65,4.65,0,0,1-7-4Z"
              />
            </svg>
            <div class="poster" :style="img(video.poster)" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    selectVideo(video) {
      this.$store.commit('setModal', { type: 'video', data: video })
    },
    img(poster) {
      if (!poster) return
      return { backgroundImage: `url(${poster})` }
    }
  }
}
</script>

<style scoped>
section {
  border-top: 1px solid #eee;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px -10px;
}

.video-container {
  flex: 0 0 100%;
  padding: 0px 10px 40px;
}

.video {
  background: #aaa;
  position: relative;
}

.poster {
  z-index: 0;
  opacity: 0.9;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-size: cover;
}

.play {
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  fill: #fff;
  opacity: 1;
}

@media screen and (min-width: 800px) {
  .video-container {
    flex: 0 0 50%;
  }
}

@media screen and (min-width: 1200px) {
  .video-container {
    flex: 0 0 33.333%;
  }
}
</style>
