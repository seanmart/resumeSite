<template lang="html">
  <section :id="data.id" class="padding bottom sides">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="video in videos">
        <div class="video">
          <div class="inner-video"></div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    videos() {
      return ['video1', 'video2', 'video1', 'video2', 'video1', 'video2']
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
  padding: 10px;
}

.inner-video {
  position: relative;
  padding-top: 56.25%;
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
