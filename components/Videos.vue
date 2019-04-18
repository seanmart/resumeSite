<template lang="html">
  <section :id="data.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="video in data.list">
        <div class="video-container" v-if="video.link">
          <div class="video-ratio video">
            <iframe
              :src="`${video.link}`"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
  margin: 0px -10px -40px;
}

.video-container {
  flex: 0 0 100%;
  padding: 0px 10px 40px;
}

.video {
  background: #aaa;
  position: relative;
  transition: transform 0.25s;
}

.video:active {
  transform: scale(0.95);
}

.video iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
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
