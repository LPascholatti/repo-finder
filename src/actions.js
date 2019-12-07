import request from 'superagent';

const baseUrl = 'https://api.github.com'

export const REPOSITORIES_FETCH = 'REPOSITORIES_FETCH'
export const REPOSITORY_FETCH = 'REPOSITORY_FETCH'
export const SEARCHED_NAME = 'SEARCHED_NAME'
export const REPOSITORIES_ITEMS = 'REPOSITORIES_ITEMS'
export const DETAIL_URL = "DETAIL_URL"
export const DETAIL_ID = "DETAIL_ID"

const repositoriesFetch = repositories => ({
  type: REPOSITORIES_FETCH,
  payload: repositories
})

const repositoryFetch = repository => ({
  type: REPOSITORY_FETCH,
  payload: repository
})

const searchedName = name => ({
  type: SEARCHED_NAME,
  payload: name
})

const detailedUrl = url => ({
  type: DETAIL_URL,
  payload: url
})

const detailedId = id => ({
  type: DETAIL_ID,
  payload: id
})

export const loadRepositories = (name) => (dispatch, getState) => {
  const state = getState()
  const { repositories } = state

  if (!repositories.length) {
    request(`${baseUrl}/search/repositories?q=${name}`)
    .then(response => {
      const fetchAction = repositoriesFetch(response.body)
      const searchAction = searchedName(name)
      dispatch(fetchAction)
      dispatch(searchAction)
    })
    .catch(console.error)
  }
}

export const loadRepository = (id, url) => (dispatch) => {
  console.log("url loadRepository", url)
  request(`${url}`)
  .then(response => {
    const actionUrl = detailedUrl(url)
    const actionId = detailedId(id)
    const actionResponse = repositoryFetch(response.body)
    dispatch(actionUrl)
    dispatch(actionId)
    dispatch(actionResponse)
  })
  .catch(console.error)
}