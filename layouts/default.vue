<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
html {
  font-family: 'Kanit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight: 200;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h1,
h2,
h3,
h4 {
  font-weight: 600;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
