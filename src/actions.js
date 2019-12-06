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

  const searchName = JSON.stringify(name.name)

  if (!repositories.length) {
    request(`${baseUrl}/search/repositories?q=${searchName}`)
    .then(response => {
      const fetchAction = repositoriesFetch(response.body)
      const searchAction = searchedName(name)
      dispatch(fetchAction)
      dispatch(searchAction)
    })
    .catch(console.error)
  }
}