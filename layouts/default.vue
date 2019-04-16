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
  background: #fafafa;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
}

/*--- global styles ---*/
.padding {
  padding: 8vw 10vw;
}

.site-width {
  max-width: 1400px;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 2em;
  font-weight: 600;
  margin: 20px 0px;
  line-height: 0.8em;
}

h2 {
  font-weight: 500;
  font-size: 1.35em;
  margin: 5px 0px;
}

h3 {
  font-weight: 600;
  font-size: 0.8em;
}

p {
  margin: 15px 0px;
  font-size: 0.9em;
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

@media screen and (max-width: 600px) {
  h2 {
    font-size: 1.2em;
  }
}

@media screen and (min-width: 1400px) {
  .padding {
    padding: 100px 142px;
  }

  .padding.sides {
    padding: 0px 142px;
  }
}

.fade-on {
  animation: fadeon 1s;
}

.slide-up {
  animation: slideup 1s;
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
