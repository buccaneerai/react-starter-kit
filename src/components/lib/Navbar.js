import React from 'react';
import PropTypes from 'prop-types';

const Navbar = function Navbar(props) {
  return (<div/>);
};

Navbar.defaultProps = {
  email: null,
};

Navbar.propTypes = {
  email: PropTypes.string,
};

export default Navbar;
