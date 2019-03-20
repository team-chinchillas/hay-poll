import { createAction } from 'promise-middleware-redux';
import { postPoll } from '../services/polls';

export const [
  createPoll,
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED,
  CREATE_POLL_REJECTED
] = createAction('CREATE_POLL', postPoll);

export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: question
});

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const updateInput = input => ({
  type: UPDATE_INPUT,
  payload: input
});
