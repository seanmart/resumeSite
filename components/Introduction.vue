<template lang="html">
  <section :id="data.id" :style="{ paddingTop: `${data.page.navHeight}px` }">
    <div class="image" :style="img" />
    <div class="text">
      <h1>{{ data.name }}</h1>
      <h3 class="bar">{{ data.position }}</h3>
      <template v-for="d in description">
        <p>{{ d }}</p>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    img() {
      return { backgroundImage: `url(${this.data.photo})` }
    },
    description() {
      return this.data.description.split('\n')
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
    padding-bottom: 0px;
  }

  .text {
    flex: 1 1 auto;
    margin: 40px 0px;
  }

  .image {
    flex: 0 0 60%;
    align-self: stretch;
    margin-right: 20px;
    margin-bottom: 0px;
    border-radius: 0px;
    box-shadow: none;
    padding: 0px;
  }
}
</style>
