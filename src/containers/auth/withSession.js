import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/session';
// import Loading from '../../components/Loading';

export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string
    };

    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }

    render() {
      if(!this.props.token) return <h1>logging in</h1>;
      return <Component { ...this.props } />;
    }
  }
  
  const mapStatetoProps = state => ({
    token: getToken(state)
  });

  return connect(
    mapStatetoProps
  )(WithSession);
};
