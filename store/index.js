import gql from 'graphql-tag'

export const state = () => ({
  games: [],
})

export const actions = {
  async callApollo({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query GetGames {
          games {
            id
            image
            name
            rating
            game_user {
              id
              name
              profileImg
            }
          }
        }
      `,
    })

    await commit('updateGames', response.data.games)
  },
}

export const mutations = {
  updateGames: (state, data) => {
    state.games = data
  },
}
