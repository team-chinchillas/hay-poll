import React from 'react';
import PropTypes from 'prop-types';

export default function Polls({ polls }) {
  const pollLists = polls.map(poll => {
    return <li key={poll._id}>poll.question</li>;
  });

  return (
    <ul> {pollLists} </ul>
  );
}

Polls.propTypes = {
  polls: PropTypes.array.isRequired
};

