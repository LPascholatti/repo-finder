import request from "superagent";

const baseUrl = "https://api.github.com";

export const REPOSITORIES_FETCH = "REPOSITORIES_FETCH";
export const REPOSITORY_FETCH = "REPOSITORY_FETCH";
export const SEARCHED_NAME = "SEARCHED_NAME";
export const REPOSITORIES_ITEMS = "REPOSITORIES_ITEMS";
export const DETAIL_ID = "DETAIL_ID";
export const README_FETCH = "README_FETCH";

const repositoriesFetch = repositories => ({
  type: REPOSITORIES_FETCH,
  payload: repositories
});

const repositoryFetch = repository => ({
  type: REPOSITORY_FETCH,
  payload: repository
});

const searchedName = name => ({
  type: SEARCHED_NAME,
  payload: name
});

const detailedId = id => ({
  type: DETAIL_ID,
  payload: id
});

const requestReadme = readme => ({
  type: README_FETCH,
  payload: readme
});

export const loadRepositories = name => (dispatch, getState) => {
  const state = getState();
  const { repositories } = state;

  if (!repositories.length) {
    request(`${baseUrl}/search/repositories?q=${name}`)
      .then(response => {
        const fetchAction = repositoriesFetch(response.body);
        const searchAction = searchedName(name);
        dispatch(fetchAction);
        dispatch(searchAction);
      })
      .catch(console.error);
  }
};

export const loadRepository = id => dispatch => {
  request(`${baseUrl}/repositories/${id}`)
    .then(response => {
      const actionId = detailedId(id);
      const actionResponse = repositoryFetch(response.body);
      dispatch(actionId);
      dispatch(actionResponse);
    })
    .catch(console.error);
};

export const loadReadme = (owner, name) => dispatch => {
  if (owner && name) {
    request(`${baseUrl}/repos/${owner}/${name}/readme`)
      .set("Accept", "application/vnd.github.v3.html")
      .then(response => {
        const readmeAction = requestReadme(response);
        dispatch(readmeAction);
      })
      .catch(console.error);
  }
};
