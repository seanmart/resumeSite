<template lang="html">
  <section :id="data.id" class="padding sides bottom">
    <h1 class="padding top bottom">{{ data.sectionName }}</h1>
    <div class="container">
      <template v-for="skill in data.skills">
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
  margin: 0px -20px;
}

.skill {
  flex: 0 0 100%;
  padding: 0px 20px 40px;
}

@media screen and (min-width: 800px) {
  .skill {
    flex: 0 0 50%;
  }
}

@media screen and (min-width: 1000px) {
  .skill {
    flex: 0 0 33.333%;
  }
}
</style>
