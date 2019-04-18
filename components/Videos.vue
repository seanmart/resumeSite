<template lang="html">
  <section :id="data.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="video in data.list">
        <div class="video-container" @click="selectVideo(video)">
          <div class="video-ratio video"></div>
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
      this.$store.commit('setModal', { type: 'video', link: video })
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
  padding: 0px 10px 20px;
}

.video {
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 15px 20px -10px rgba(0, 0, 0, 0.15);
}

@media screen and (min-width: 800px) {
  .video-container {
    flex: 0 0 50%;
  }
}

@media screen and (min-width: 1000px) {
  .video-container {
    flex: 0 0 33.333%;
  }
}
</style>
