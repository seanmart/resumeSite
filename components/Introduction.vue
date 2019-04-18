<template lang="html">
  <section :id="data.id" class="padding all">
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

<style lang="css" scoped>
section {
  display: flex;
  justify-content: center;
}

.text {
  flex: 0 0 auto;
  max-width: 500px;
}

.text h1 {
  margin: 7px 0px;
}


.link {
  margin-top: 40px;
}

.image {
  flex: 0 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

@media screen and (max-width: 999px){
  section{
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
  }

  .text{
      text-align: center;
  }

  .text p {
    text-align: left;
  }

  .link{
    text-align: center;
  }

  .image{
    height: 30vw;
    width: 30vw;
    max-height: 200px;
    max-width: 200px;
    margin: 0px 0px 40px;
    border-radius: 100%;
    box-shadow: 0 1px 10px 0px rgba(0,0,0,.1) inset;
  }
}

@media screen and (min-width: 601px) {
  .image {
    margin-top: 40px;
  }
}

@media screen and (min-width: 1000px) {
  section.all {
    flex-direction: row;
    align-items: stretch;
    padding-bottom: 0px;
  }

  .text {
    flex: 1 1 auto;
    margin: 50px 0px;
    text-align: left;
  }

  .link {
    text-align: left;
  }

  .image {
    flex: 0 0 60%;
    margin: 40px 20px 0px 0px;
    border-radius: 0px;
    box-shadow: none;
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }

  .bar::after {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
