import { DETAIL_URL } from '../actions'

const reducer = (state = "", action) => {
  switch(action.type) {
    case DETAIL_URL: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 