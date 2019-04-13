<template lang="html">
  <section class="site-width width-padding intro-container">
      <div class="intro-text border">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
      </div>
      <div class="intro-image border">
        <img :src="data.photo" alt="">
      </div>
  </section>
</template>

<script>
import introduction from '@/content/introduction.json'
export default {
  computed: {
    data() {
      return introduction
    }
  }
}
</script>

<style lang="css">

.intro-container{
  display: flex;
  flex-direction: row;
}

.intro-text{
  flex: 1 1 33.333%;
  display: flex;
  align-items: center;
  padding-right: 2.5vw
}

.intro-image{
  flex: 5 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-left: 2.5vw
}

.intro-image img{
  width: 100%;
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
    padding:0px;
  }

  .intro-image{
    flex: 0 0 auto;
    padding:0px;
  }
}

</style>
