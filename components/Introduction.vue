<template lang="html">
  <section class="site-width width-padding intro-container">
      <div class="intro-text">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
      </div>
      <div class="intro-image" :style="{backgroundImage: `url(${data.photo})`}"/>
  </section>
</template>

<script>
export default {
  props:['data']
}
</script>

<style lang="css">

.intro-container{
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
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
