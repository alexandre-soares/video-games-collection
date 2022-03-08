<template>
  <div class="container">
    <section class="game-container">
      <article v-for="game in games" :key="game.id">
        <Game :game="game" />
      </article>
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
