import { CREATE_POLL } from '../actions/pollForm';

const initialState = {
  polls: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_POLL:
      return {
        ...state,
        polls: [...state.polls, payload]
      };
    default:
      return state;
  }
}
