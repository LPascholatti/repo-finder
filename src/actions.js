import request from 'superagent';

const baseUrl = 'https://api.github.com/'

export const REPOSITORIES_FETCH = 'REPOSITORIES_FETCH'

const repositoriesFetch = name => ({
  type: REPOSITORIES_FETCH,
  payload: name
})

export const loadRepositories = (name) => (dispatch, getState) => {
  const state = getState()
  const { repositories } = state

  if (!repositories.length) {
    request(`${baseUrl}/search/repositories?q=${name}`)
    .then(response => {
      const action = repositoriesFetch(response.body)
      dispatch(action)
    })
    .catch(console.error)
  }
}