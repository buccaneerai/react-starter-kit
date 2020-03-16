import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {tokenIsValid} from '../../helpers/userHelpers';
import {login} from '../../redux/reducers/users';
import LoginScreen from '../../components/users/LoginScreen';

const LoginContainer = function LoginContainer(props) {
  const {users} = props;
  if (users.token && tokenIsValid({token: users.token})) {
    return <Redirect to='/' />;
  }
  return <LoginScreen {...props} />;
};

function mapState(state) {
  return {
    users: state.users,
  };
}

function mapDispatch(dispatch) {
  return {
    login: params => dispatch(login(params)),
  };
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  users: PropTypes.object,
};

export default connect(mapState, mapDispatch)(LoginContainer);
