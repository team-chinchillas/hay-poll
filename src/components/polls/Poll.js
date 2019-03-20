import React from 'react';
import PropTypes from 'prop-types';

export default function Poll({ poll }) {
  const inputsLists = poll.input.map(input => {
    return <li key={input}>{input}</li>;
    
  });
  const { question } = poll;
  return (
    <>
    <h2>{question}</h2>
    <ul> {inputsLists} </ul>
    </>
  );
}

Poll.propTypes = {
  poll: PropTypes.object.isRequired
};
