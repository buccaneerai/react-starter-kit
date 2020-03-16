import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

import {login} from '../../redux/reducers/users';
import LoginScreen from '../../components/users/LoginScreen';

const LoginContainer = function LoginContainer(props) {
  return <LoginScreen {...props} />;
};

function mapState(state) {
  return {
    user: state.users.me,
  };
}

function mapDispatch(dispatch) {
  return {
    login: params => dispatch(login(params)),
  };
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapState, mapDispatch)(LoginContainer);
