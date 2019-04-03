import { combineReducers } from 'redux';

import registration from './registration';
import books from './books';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  registration,
  books
});

export default rootReducer;
