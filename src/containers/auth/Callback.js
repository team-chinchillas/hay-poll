import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../../selectors/session';
import { Redirect } from 'react-router-dom';
// import { setSession } from '../../actions/session';

class Callback extends PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    // handleAuth: PropTypes.func.isRequired
  }

  // componentDidMount() {
  //   this.props.handleAuth();
  // }

  render() {
    if(this.props.token) {
      return <Redirect to='/home' />;
    }
    return <h1>loading</h1>;
  }
}

const mapStateToProps = state => ({
  token: getToken(state) 
});

// const mapDispatchToProps = dispatch => ({
//   handleAuth() {
//     dispatch(setSession());
//   }
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Callback);
