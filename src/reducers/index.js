import { combineReducers } from 'redux';
import session from './session';
import pollForm from './pollForm';

export default combineReducers({
  pollForm,
  session
});
