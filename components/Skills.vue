<template lang="html">
  <section :id="data.id" class="padding sides bottom">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="skill in data.list">
        <div class="skill">
          <h2>{{ skill.title }}</h2>
          <p>{{ skill.description }}</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -40px;
}

.skill {
  flex: 0 0 100%;
  padding-bottom: 40px;
}

.skill p {
  margin-bottom: 0px;
}

@media screen and (min-width: 800px) {
  .container {
    margin: 0px -10px -40px;
  }

  .skill {
    flex: 0 0 50%;
    padding: 0px 10px 40px;
  }
}

@media screen and (min-width: 1000px) {
  .skill {
    flex: 0 0 33.333%;
  }
}
</style>
