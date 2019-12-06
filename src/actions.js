import request from 'superagent';

const baseUrl = 'https://api.github.com'

export const REPOSITORIES_FETCH = 'REPOSITORIES_FETCH'
export const SEARCHED_NAME = 'SEARCHED_NAME'
export const REPOSITORIES_ITEMS = 'REPOSITORIES_ITEMS'

const repositoriesFetch = repositories => ({
  type: REPOSITORIES_FETCH,
  payload: repositories
})

const searchedName = name => ({
  type: SEARCHED_NAME,
  payload: name
})

export const loadRepositories = (name) => (dispatch, getState) => {
  const state = getState()
  const { repositories } = state

  if (!repositories.length) {
    request(`${baseUrl}/search/repositories?q=${name}`)
    .then(response => {
      const action = repositoriesFetch(response.body)
      const action2 = searchedName(name)
      dispatch(action)
      dispatch(action2)
    })
    .catch(console.error)
  }
}