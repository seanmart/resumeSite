<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,500i'
      }
    ]
  }
}
</script>

<style>
html {
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
}

.border {
  border: 1px solid black;
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

.line {
  border-bottom: 1px solid #eee;
}
</style>
