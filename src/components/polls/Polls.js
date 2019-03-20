import React from 'react';
import PropTypes from 'prop-types';

export default function Polls({ polls }) {
  const pollLists = polls.map((poll, i) => {
    return <li key={i}>{poll.question}</li>;
  });

  return (
    <ul> {pollLists} </ul>
  );
}

Polls.propTypes = {
  polls: PropTypes.array.isRequired
};

