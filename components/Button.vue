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
  padding: 9px 15px;
  border: 1px solid #999;
  color: #999;
  text-transform: uppercase;
}
</style>
