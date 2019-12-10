import { combineReducers } from 'redux';
import repositories from '../reducers/repositories';
import repository from '../reducers/repository';
import name from './name';
import page from './page';
import readme from './readme';
import time from './time';

export default combineReducers({
  repositories,
  repository,
  name,
  readme,
  time,
  page
})