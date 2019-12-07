import { combineReducers } from 'redux';
import repositories from '../reducers/repositories';
import repository from '../reducers/repository';
import name from './name';

export default combineReducers({
  repositories,
  repository,
  name
})