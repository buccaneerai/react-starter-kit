import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {tokenIsValid} from '../../helpers/userHelpers';
import {signup} from '../../redux/reducers/users';
import SignupScreen from '../../components/users/SignupScreen';

const SignupContainer = function SignupContainer(props) {
  const {users} = props;
  if (users.token && tokenIsValid({token: users.token})) {
    return <Redirect to='/' />;
  }
  return <SignupScreen {...props} />;
};

function mapState(state) {
  return {
    users: state.users,
  };
}

function mapDispatch(dispatch) {
  return {
    signup: params => dispatch(signup(params)),
  };
}

SignupContainer.propTypes = {
  signup: PropTypes.func.isRequired,
  // user: PropTypes.object,
};

export default connect(mapState, mapDispatch)(SignupContainer);
