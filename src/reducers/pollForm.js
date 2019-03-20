import { UPDATE_QUESTION, UPDATE_INPUT } from '../actions/pollForm';

const initialState = {
  question: '',
  input: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_QUESTION:
      return {
        ...state, 
        question: payload
      };
    case UPDATE_INPUT:
      return {
        ...state, 
        input: payload
      };
    default:
      return state;
  }
}
