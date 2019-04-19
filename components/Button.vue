<template lang="html">
  <div class="button">
    <h3><slot /></h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.button{
  display: inline-block;
  padding: 15px 25px;
  border-radius: 3px;
  background: #3c91e6;
  color: white;
  text-transform: uppercase;
}
</style>
