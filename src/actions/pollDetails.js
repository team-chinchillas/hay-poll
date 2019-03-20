import { createAction } from 'promise-middleware-redux';
import { getPoll } from '../services/polls';

export const [
  fetchPollDetails,
  FETCH_POLL_DETAILS,
  FETCH_POLL_DETAILS_PENDING,
  FETCH_POLL_DETAILS_FULFILLED,
  FETCH_POLL_DETAILS_REJECTED
] = createAction('FETCH_NOTE_DETAILS', getPoll);
