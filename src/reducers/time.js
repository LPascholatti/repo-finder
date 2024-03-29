import { PERFORMANCE_TIME } from '../actions'

const reducer = (state = 0, action) => {
  switch(action.type) {
    case PERFORMANCE_TIME: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 