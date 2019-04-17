<template lang="html">
  <section :id="data.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="video in data.list">
        <div class="video" @click="selectVideo(video)">
          <div class="video-ratio"></div>
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
  background: #eee;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px -10px;
}

.video {
  flex: 0 0 100%;
  padding: 0px 10px 20px;
}

.video div {
  background: #ccc;
}

@media screen and (min-width: 800px) {
  .video {
    flex: 0 0 50%;
  }
}

@media screen and (min-width: 1000px) {
  .video {
    flex: 0 0 33.333%;
  }
}
</style>
