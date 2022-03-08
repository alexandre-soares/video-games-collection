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
            name
            year_of_release
            platform
            genres
            labels
            rating
            cover_image
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
