import { SEARCHED_PAGE } from '../actions'

const reducer = (state = "", action) => {
  switch(action.type) {
    case SEARCHED_PAGE: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 