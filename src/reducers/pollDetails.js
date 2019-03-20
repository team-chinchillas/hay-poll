import {
  FETCH_POLL_DETAILS
} from '../actions/pollDetails';

const initialState = {
  poll: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POLL_DETAILS:
      return {
        ...state,
        poll: payload
      };
    default:
      return state;
  }
}
