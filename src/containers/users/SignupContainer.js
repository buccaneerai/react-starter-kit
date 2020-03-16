import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {signup} from '../../redux/reducers/users';
import SignupScreen from '../../components/users/SignupScreen';

const SignupContainer = function SignupContainer(props) {
  return <SignupScreen {...props} />;
};

function mapState(state) {
  return {
    // user: state.users.me,
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
