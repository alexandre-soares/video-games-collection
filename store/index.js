import gql from 'graphql-tag'

export const state = () => ({
  games: [],
  users: [],
})

export const actions = {
  async fetchGames({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query GetGames {
          games(order_by: { name: asc }) {
            id
            name
            year_of_release
            platform
            genres
            labels
            rating
            cover_image
            game_users {
              user {
                name
                profileImg
              }
            }
          }
        }
      `,
    })

    await commit('updateGames', response.data.games)
  },
  async fetchUsers({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query GetUsers {
          users {
            id
            name
          }
        }
      `,
    })
    await commit('updateUsers', response.data.users)
  },
}

export const mutations = {
  updateGames: (state, data) => {
    state.games = data
  },
  updateUsers: (state, data) => {
    state.users = data
  },
}
