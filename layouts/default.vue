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

/*--- global sizes ---*/

.site-width {
  max-width: 1400px;
}

.bar::after {
  content: '';
  display: block;
  width: 50px;
  height: 5px;
  background: #ddd;
  margin: 40px auto;
}

.padding.all,
.padding.top {
  padding-top: 85px;
}

.padding.all,
.padding.bottom {
  padding-bottom: 85px;
}

.padding.all,
.padding.sides {
  padding-left: 5vw;
  padding-right: 5vw;
}

.video-ratio {
  width: 100%;
  padding-top: 56.25%;
}

@media screen and (min-width: 1500px) {
  .padding.all,
  .padding.sides {
    padding-left: 85px;
    padding-right: 85px;
  }
}

/* ------- global font -------*/

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 2em;
  font-weight: 600;
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

@media screen and (max-width: 600px) {
  h2 {
    font-size: 1.2em;
  }
}

/* ------- global animations -------*/

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
