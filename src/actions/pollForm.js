// import { createAction } from 'promise-middleware-redux';

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
