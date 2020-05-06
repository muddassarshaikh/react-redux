import { combineReducers } from 'redux';
import user from './user';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  form: formReducer,
  user,
});

export default reducers;
