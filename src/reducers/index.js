import { combineReducers } from 'redux';
import session from './session';
import polls from './polls';
import pollForm from './pollForm';

export default combineReducers({
  pollForm,
  polls,
  session
});
