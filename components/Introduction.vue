<template lang="html">
  <section :id="data.id">
    <div class="image" :style="img(data.photo)" />
    <div class="text">
      <h1>{{ data.name }}</h1>
      <h3>{{ data.position }}</h3>
      <p>{{ data.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    img(file) {
      return { backgroundImage: `url(${file})` }
    }
  }
}
</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.text {
  flex: 0 0 auto;
  max-width: 500px;
  padding: 0px 0px 40px;
}

.image {
  flex: 0 0 auto;
  padding: 30%;
  margin: 20px 0px 40px;
  border-radius: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 700px) {
  .image {
    padding: 15%;
  }
}

@media screen and (orientation: landscape) and (min-width: 800px) {
  section {
    flex-direction: row;
    max-height: 1000px;
    height: 100vh;
    min-height: 400px;
  }

  .text {
    flex: 1 1 auto;
    padding: 40px 0px;
  }

  .image {
    flex: 0 0 60%;
    align-self: stretch;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 0px;
    border-radius: 0px;
    box-shadow: none;
    padding: 0px;
  }
}
</style>
