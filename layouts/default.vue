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

section,
.full-height {
  height: 100vh;
}

.border {
  border: 1px solid black;
}

.site-width {
  display: block;
  max-width: 1500px;
  margin: 0px auto;
}

.left-padding,
.width-padding,
.padding {
  padding-left: 5vw;
}

.right-padding,
.width-padding,
.padding {
  padding-right: 5vw;
}

.top-padding,
.height-padding,
.padding {
  padding-top: 5vw;
}

.bottom-padding,
.height-padding,
.padding {
  padding-bottom: 5vw;
}
</style>
