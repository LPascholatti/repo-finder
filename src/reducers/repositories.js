import { REPOSITORIES_FETCH } from '../actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case REPOSITORIES_FETCH: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 