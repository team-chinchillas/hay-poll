import { CREATE_POLL } from '../actions/pollForm';
import { FETCH_POLLS } from '../actions/polls';

const initialState = {
  polls: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return {
        ...state,
        polls: payload
      };
    case CREATE_POLL:
      return {
        ...state,
        polls: [...state.polls, payload]
      };
    default:
      return state;
  }
}
