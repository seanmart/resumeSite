<template lang="html">
  <div class="top-header">
    <template v-for="item in data">
      <h3>{{item.name}}</h3>
    </template>
  </div>
</template>

<script>
export default {
  props:["data"],
}
</script>

<style lang="css">
</style>
