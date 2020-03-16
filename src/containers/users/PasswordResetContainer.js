import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

import {resetPassword} from '../../redux/reducers/users';
import ResetPasswordScreen from '../../components/users/PasswordResetScreen';

const LoginContainer = function LoginContainer(props) {
  return <ResetPasswordScreen {...props} />;
};

function mapState(state) {
  return {};
}

function mapDispatch(dispatch) {
  return {
    resetPassword: params => dispatch(resetPassword(params)),
  };
}

LoginContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(LoginContainer);
