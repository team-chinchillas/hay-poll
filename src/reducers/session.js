import { SET_SESSION } from '../actions/session';

const initialState = {
  token: ''
};

export default function reducer(State = initialState, action) {
  console.log('action payload', action.payload);
  switch(action.type) {
    case SET_SESSION:
      return action.payload;
    default:
    return state;  
  }
}