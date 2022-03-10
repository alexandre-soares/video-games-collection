<template>
  <article class="game">
    <div class="game__header">
      <img :src="`/images/games/${game.cover_image}`" :alt="game.name" />
    </div>
    <div class="game__body">
      <h2>{{ game.name }}</h2>
      <div class="game__labels">
        <span
          v-for="(genre, index) in game.genres"
          :key="index"
          :data-genre="genre"
        >
          {{ genre }}
        </span>
      </div>
      <div class="game__labels">
        <span :data-platform="game.platform">{{ game.platform }}</span>
      </div>

      <div class="game__labels">
        <span
          v-for="(label, index) in game.labels"
          :key="index"
          :data-label="label"
        >
          {{ label }}
        </span>
      </div>

      <div class="game__users">
        <Transition>
          <div v-if="showUsersPlayingCounter" class="game__users--info">
            <span v-if="game.game_users.length > 1"
              >{{ game.game_users.length }} persons are <br />playing this
              game</span
            >
            <span v-else
              >{{ game.game_users.length }} person is <br />playing this
              game</span
            >
          </div>
        </Transition>
        <div
          class="game__users--img"
          @mouseenter="showUsersPlayingCounter = true"
          @mouseleave="showUsersPlayingCounter = false"
        >
          <img
            v-for="(user, index) in game.game_users"
            :key="index"
            :src="`/images/persons/${user.user.profileImg}`"
            :alt="user.name"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Game',
  props: {
    game: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showUsersPlayingCounter: false
    }
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>

<style lang="scss" scoped>
.game {
  background-color: white;
  border-radius: 6px;
  border: 1px solid lightgray;
  position: relative;

  &__header {
    height: 200px;
    overflow: hidden;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    gap: 10px;
  }

  &__labels {
    margin: 6px 0;
    display: flex;
    flex-direction: row;
    gap: 12px;

    & span {
      padding: 1px 10px;
      border-radius: 4px;
      font-size: 14px;
      color: black;
      font-weight: 400;

      &[data-genre='💣 Action'],
      &[data-platform='Nintendo Switch'] {
        background-color: lightpink;
      }

      &[data-genre='🌐 Open World'],
      &[data-label='In Progress'] {
        background-color: lightblue;
      }

      &[data-genre='🎢 Platform'],
      &[data-label='To Buy'] {
        background-color: lightgrey;
      }

      &[data-genre='🏎 Course'] {
        background-color: lightcyan;
      }

      &[data-genre='👻 Infiltration'],
      &[data-platform='Playstation 4'] {
        background-color: lightgoldenrodyellow;
      }

      &[data-genre='🌐 Open World'],
      &[data-label='To Do'] {
        background-color: lightblue;
      }

      &[data-genre="🥊 Beat'em All"] {
        background-color: lightpink;
      }

      &[data-genre='🤔 Reflexion'],
      &[data-platform='PC'] {
        background-color: rgb(209, 247, 250);
      }

      &[data-genre='🧙🏾‍♂️ RPG'] {
        background-color: rgb(255, 194, 255);
      }

      &[data-genre='⛩ JRPG'],
      &[data-platform='Playstation 1'] {
        background-color: rgba(226, 192, 192, 0.658);
      }

      &[data-genre='🏹 Adventure'],
      &[data-label='PS+'],
      &[data-label='Finished'],
      &[data-label='Story Finished'],
      &[data-label='100%'] {
        background-color: rgb(221, 252, 221);
      }
    }
  }

  &__users {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 20px;
    right: 20px;

    &--info {
      font-size: 11px;
      font-weight: 500;
      margin-bottom: 5px;
      margin-right: -15px;
      padding: 10px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.74);
      color: white;
      border-radius: 4px;
    }

    &--img {
      display: flex;
      margin-left: auto;
    }

    & img {
      width: 45px;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 50%;
      border: 2px solid white;
      margin-right: -15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
