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
  font-family: 'IBM Plex Serif', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/*--- global styles ---*/

section {
  border-bottom: 1px solid #eee;
  padding: 80px;
}

.site-width {
  display: block;
  max-width: 1500px;
  margin: 0px auto;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 2em;
  font-weight: 500;
  margin: 7px 0px;
  line-height: 0.8em;
}

h2 {
  font-weight: 400;
  font-size: 1.5em;
  margin: 5px 0px;
}

h3 {
  font-weight: 500;
  font-size: 0.8em;
}

p {
  margin: 15px 0px;
  font-size: 1em;
  line-height: 1.45em;
}

.bar::after {
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

  .bar::after {
    margin-left: 0px;
    margin-right: 0px;
  }
}

.fade-on {
  animation: fadeon 0.5s;
}

.slide-up {
  animation: slideup 0.5s;
}

@keyframes slideup {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fadeon {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slidedown {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slideon {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slideoff {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
