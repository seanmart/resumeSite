<template lang="html">
  <section class="site-width" :id="data.id">
    <div class="intro container">
      <div class="intro-text">
        <p>{{ data.description }}</p>
      </div>
      <div
        class="intro-image"
        :style="{ backgroundImage: `url(${data.photo})` }"
      />
    </div>
    <div class="line" />
  </section>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">

.intro{
  display: flex;
  flex-direction: row;
  background: #fff;
}

.intro-text{
  flex: 1 1 25%;
  display: flex;
  align-items: center;
  margin-right: 20px
}

.intro-image{
  flex: 5 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-left: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

}

.test{
  background: red;
  height: 200px;
  width: 100%;
}

@media screen and (max-width: 700px){
  .intro-container{
    flex-direction: column;
    justify-content: flex-end;
  }

  .intro-text{
    margin-right:0px;
    margin-bottom: 20px;
  }

  .intro-image{
    margin-left:0px;
    margin-top: 20px;
  }
}
</style>
