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
  background: #eee;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/*--- global styles ---*/

section {
  display: block;
  max-width: 1200px;
  margin: 0px auto;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid #eee;
  background: #fff;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  letter-spacing: -0.03em;
}

h1 {
  font-size: calc(2em + 1vw);
  font-weight: 400;
  margin-bottom: 0px;
  line-height: 0.8em;
}

h1::after {
  content: '';
  display: block;
  width: 50px;
  height: 5px;
  background: #ddd;
  margin: 40px auto;
}

@media screen and (orientation: landscape) and (min-width: 800px) {
  h1,
  h2,
  h3 {
    text-align: left;
  }

  h1::after {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
