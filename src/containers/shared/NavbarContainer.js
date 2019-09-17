import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { logout } from '../../reducers/users';
import Header from '../../components/shared/Header';

let HeaderContainer = function HeaderContainer(props) {
  return <Header {...props} />;
};

function mapState(state) {
  return {
    token: state.users.token,
    email: (
      state.users && state.users.user && state.users.user.email
      ? state.users.user.email
      : null
    ),
  };
}

function mapDispatch(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

HeaderContainer.defaultProps = {
  email: null,
  token: null,
};

HeaderContainer.props = {
  logout: PropTypes.func,
  email: PropTypes.string,
  token: PropTypes.string,
};

export default connect(mapState, mapDispatch)(HeaderContainer);
