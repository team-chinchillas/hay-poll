import { connect } from 'react-redux';
import PollForm from '../../components/polls/PollForm';
import { updateInput, updateQuestion, createPoll } from '../../actions/pollForm';
import { getInput, getQuestion } from '../../selectors/pollForm';

const mapStateToProps = state => ({
  question: getQuestion(state),
  input: getInput(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(question, input, event) {
    event.preventDefault();
    dispatch(createPoll({ question, input }));
  },

  questionChange({ target }) {
    dispatch(updateQuestion(target.value));
  },

  inputChange({ target }) {
    dispatch(updateInput(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollForm);
