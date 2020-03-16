import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { logout } from '../../redux/reducers/users';
import Navbar from '../../components/lib/Navbar';

const NavbarContainer = function NavbarContainer(props) {
  return <Navbar {...props} />;
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

NavbarContainer.defaultProps = {
  email: null,
  token: null,
};

NavbarContainer.props = {
  logout: PropTypes.func,
  email: PropTypes.string,
  token: PropTypes.string,
};

export default connect(mapState, mapDispatch)(NavbarContainer);
