<template>
  <header>
    <img src="/images/header-image.jpg" alt="header-image" />
    <span>🎮</span>
    <h1>Video Games Collection</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
header {
  max-height: 350px;
  display: flex;
  flex-direction: column;

  & img {
    max-height: 250px;
    object-fit: cover;
  }

  & span {
    font-size: 56px;
    margin-left: 40px;
    margin-top: -40px;
  }

  & h1 {
    font-size: 32px;
    margin-left: 40px;
  }
}
</style>
