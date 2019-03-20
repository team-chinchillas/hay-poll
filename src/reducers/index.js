import { combineReducers } from 'redux';
import polls from './polls';
import pollForm from './pollForm';
import pollDetails from './pollDetails';
import session from './session';

export default combineReducers({
  polls,
  pollForm,
  pollDetails,
  session
});
