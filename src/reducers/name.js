import { SEARCHED_NAME } from '../actions'

const reducer = (state = "", action) => {
  switch(action.type) {
    case SEARCHED_NAME: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 