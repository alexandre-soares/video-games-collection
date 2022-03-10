<template>
  <div class="container">
    <section class="game-list">
      <Game v-for="game in games" :key="game.id" :game="game" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Game from '@/components/Game.vue'

export default {
  components: {
    Game
  },
  layout: 'default',
  computed: {
    ...mapState(['games'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  padding: 0 40px;
}

.game-list {
  margin: 48px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;

  & article {
    flex: 30%;

    @media screen and (max-width: 768px) {
      flex: 100%;
    }
  }
}
</style>
