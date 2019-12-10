import { REPOSITORIES_FETCH, REPOSITORIES_NEXT_FETCH } from '../actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case REPOSITORIES_FETCH: {
      return action.payload
    }
    case REPOSITORIES_NEXT_FETCH: {
      return [...state, action.payload]
    }
    default: 
    return state
  }
}

export default reducer 