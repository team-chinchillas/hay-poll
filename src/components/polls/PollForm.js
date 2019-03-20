import React from 'react';
import PropTypes from 'prop-types';

function PollForm({ question, input, handleSubmit, questionChange, inputChange }) {
  return (
    <form onSubmit={handleSubmit.bind(null, question, input)}>
      <label>Question:
        <input
          type="text"
          name="question"
          placeholder="Enter a question"
          value={question}
          onChange={questionChange} />
      </label>
      <br/>
      <textarea
        name="input"
        value={input}
        onChange={inputChange} />
      <br/>
      <button>CREATE</button>
    </form>
  );
}

PollForm.propTypes = {
  question: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  questionChange: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default PollForm;
