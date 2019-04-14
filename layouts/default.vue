<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
html {
  font-family: 'EB Garamond', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: calc(2em + 2vw);
  font-weight: 400;
  margin-bottom: 0px;
  line-height: .8em
}

h1::after{
  content:"";
  display: block;
  width: 50px;
  height: 5px;
  background: #ddd;
  margin: 40px 0px;
}

@media screen and (max-width: 700px){
  h1{
    text-align: center;
  }
  h1::after{
    margin-left: auto;
    margin-right: auto;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/*--- global styles ---*/

.container {
  min-height: 100vh;
  padding-top: 90px;
  border-top: 1px solid #eee;
}

.container.first {
  border-top: none;
}

.site-width {
  display: block;
  max-width: 1500px;
  margin: 0px auto;
  padding-left: 5vw;
  padding-right: 5vw;
}

.nav-height {
  height: 70px;
}

</style>
