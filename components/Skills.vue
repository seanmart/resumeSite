<template lang="html">
  <section :id="data.id" class="padding">
    <h1>{{ data.sectionName }}</h1>
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
  padding: 20px;
}

@media screen and (min-width: 800px) {
  .skill {
    flex: 0 0 50%;
  }
}
</style>
