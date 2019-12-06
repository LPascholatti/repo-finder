import { combineReducers } from 'redux';
import repositories from '../reducers/repositories';
import repository from '../reducers/repositories';
import name from './name';
import url from './url';

export default combineReducers({
  repositories,
  repository,
  name,
  url
})