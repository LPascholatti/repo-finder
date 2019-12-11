import request from "superagent";

const baseUrl = "https://api.github.com";

export const REPOSITORIES_FETCH = "REPOSITORIES_FETCH";
export const REPOSITORIES_NEXT_FETCH = "REPOSITORIES_NEXT_FETCH";
export const REPOSITORY_FETCH = "REPOSITORY_FETCH";
export const SEARCHED_NAME = "SEARCHED_NAME";
export const SEARCHED_PAGE = "SEARCHED_PAGE";
export const REPOSITORIES_ITEMS = "REPOSITORIES_ITEMS";
export const DETAIL_ID = "DETAIL_ID";
export const README_FETCH = "README_FETCH";
export const PERFORMANCE_TIME = "PERFORMANCE_TIME";

const repositoriesFetch = repositories => ({
  type: REPOSITORIES_FETCH,
  payload: repositories
});

const repositoriesFetchNext = repositories => ({
  type: REPOSITORIES_NEXT_FETCH,
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

const searchedPage = page => ({
  type: SEARCHED_PAGE,
  payload: page
});

const detailedId = id => ({
  type: DETAIL_ID,
  payload: id
});

const requestReadme = readme => ({
  type: README_FETCH,
  payload: readme
});

const trackPerformance = time => ({
  type: PERFORMANCE_TIME,
  payload: time
})

export const loadRepositories = name => (dispatch, getState) => {
  
  const state = getState();
  const { repositories } = state;

  let t0 = performance.now()
  if (!repositories.length) {
    request(`${baseUrl}/search/repositories?q=${name}&page=1&per_page=100`)
      .then(response => {
        const fetchAction = repositoriesFetch(response.body);
        const searchAction = searchedName(name);
        dispatch(fetchAction);
        dispatch(searchAction);
      })
      .catch(console.error);
  }
  let t1 = performance.now()

  const time = t1 - t0
  const timeAction = trackPerformance(time)
  dispatch(timeAction)
  console.log(`Request time took ${time} milliseconds`)
  console.log("typeof requestTime", typeof time)
};

export const loadNextRepositories = (name, page) => (dispatch, getState) => {
  const state = getState();
  const { repositories } = state;

  if (repositories.length >= 100) {
  request(`${baseUrl}/search/repositories?q=${name}&page=${page}&per_page=100`)
      .then(response => {
        const fetchAction = repositoriesFetchNext(response.body);
        const searchAction = searchedName(name);
        const pageAction = searchedPage(page)
        dispatch(fetchAction);
        dispatch(searchAction);
        dispatch(pageAction)
      })
      .catch(console.error);
  }
}

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