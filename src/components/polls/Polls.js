import React from 'react';
import PropTypes from 'prop-types';
import Poll from './Poll';

function Polls({ polls }) {
  const pollLists = polls.map(poll => {
    return <li key={poll._id}><Poll poll={poll} /></li>;
  });

  return (
    <ul> {pollLists} </ul>
  );
}

Polls.propTypes = {
  polls: PropTypes.array.isRequired
};

