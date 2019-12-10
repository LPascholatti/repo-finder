import { SEARCHED_PAGE } from '../actions'

const reducer = (state = 1, action) => {
  switch(action.type) {
    case SEARCHED_PAGE: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 