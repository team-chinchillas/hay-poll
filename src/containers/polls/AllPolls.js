import { connect } from 'react-redux';
import Polls from '../../components/polls/Polls';
import { getPollsList } from '../../selectors/polls';
import { fetchPolls } from '../../actions/polls';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  polls: getPollsList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPolls());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Polls));
