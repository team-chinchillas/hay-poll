// import store from '../store';
// import { getToken } from '../selectors/session';

export const postPoll = poll => {
  return fetch(`${process.env.API_URL}/polls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: JSON.stringify(poll)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getPolls = polls => {
  return fetch(`${process.env.API_URL}/polls`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: JSON.stringify(polls)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getPoll = _id => {
  return fetch(`${process.env.API_URL}/polls/${_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
