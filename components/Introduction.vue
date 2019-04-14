<template lang="html">
  <section class="site-width" :id="data.id">
    <div class="intro container first">
      <div class="intro-text">
        <h1>{{ data.name }}</h1>
        <p>{{ data.description }}</p>
      </div>
      <div
        class="intro-image"
        :style="{ backgroundImage: `url(${data.photo})` }"
      />
    </div>
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
  flex-direction: column;
  justify-content: center;
  margin-right: 20px
}

.intro-image{
  flex: 1 1 75%;
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
  .intro{
    flex-direction: column;
    justify-content: flex-end;
  }

  .intro-text{
    margin-right:0px;
    margin-bottom: 40px;
  }

  .intro-image{
    order: -1;
    margin-left:0px;
    margin-bottom: 20px;
  }
}
</style>
