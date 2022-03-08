<template>
  <div class="game">
    {{ game }}
    <h1>{{ game.name }}</h1>
    <h1>{{ game.image }}</h1>
    <h1>{{ game.rating }}</h1>

    <div v-for="(genre, index) in game.genre" :key="index">
      {{ genre }}
    </div>

    <div v-for="(user, index) in game.game_user" :key="index">
      {{ user.name }}
      {{ user.profileImg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    game: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
