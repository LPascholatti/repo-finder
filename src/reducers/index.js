import { combineReducers } from 'redux';
import repositories from '../reducers/repositories';
import name from './name'

export default combineReducers({
  repositories,
  name
})