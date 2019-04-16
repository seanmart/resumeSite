<template lang="html">
  <section :id="data.id">
    <div
      class="container padding"
      :style="{ paddingTop: `${data.page.navHeight}px` }"
    >
      <div class="image" :style="img" />
      <div class="text slide-up">
        <h1>{{ data.name }}</h1>
        <h2 class="bar">{{ data.position }}</h2>
        <template v-for="d in description">
          <p>{{ d }}</p>
        </template>
        <div class="link">
          <btn>View Story</btn>
        </div>
      </div>
    </div>
    <div class="featured padding sides">
      <h1>Featured In</h1>
    </div>
  </section>
</template>

<script>
import btn from '@/components/Button'
export default {
  props: ['data'],
  components: { btn },
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
}

.container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  flex: 0 0 auto;
  max-width: 500px;
}

.link {
  margin-top: 30px;
  text-align: center;
}

.image {
  flex: 0 0 auto;
  height: 30vw;
  width: 30vw;
  max-height: 200px;
  max-width: 200px;
  margin: 20px 0px 40px;
  border-radius: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
}

.featured {
  flex: 0 0 auto;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #222;
  color: white;
}

@media screen and (orientation: landscape) and (min-width: 800px) {
  .container {
    flex-direction: row;
    padding-bottom: 0px;
  }

  .text {
    flex: 1 1 auto;
    margin: 40px 0px;
  }

  .link {
    text-align: left;
  }

  .image {
    flex: 0 0 60%;
    align-self: stretch;
    margin-right: 20px;
    margin-bottom: 0px;
    border-radius: 0px;
    box-shadow: none;
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
}

@media screen and (orientation: landscape) and (min-width: 800px) and (min-height: 800px) {
  section {
    min-height: auto;
    height: 800px;
  }
}
</style>
