import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = function Navbar(props) {
  const {email,logout} = props;
  return (
    <Nav bg="light" expand="lg">
      <Nav.Brand href='/'>Joygage</Nav.Brand>
      <Nav.Collapse className="justify-content-end">
        {email
          ? <NavDropdown title={email} id="basic-nav-dropdown">
            <NavDropdown.Item href='/admin'>Admin Dashboard</NavDropdown.Item>
            <NavDropdown.Item
              href='#'
              onClick={logout}
            >
              Sign Out
            </NavDropdown.Item>
          </NavDropdown>
          : null
        }
      </Nav.Collapse>
    </Nav>
  );
};

Navbar.defaultProps = {
  email: null,
};

Navbar.propTypes = {
  email: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

export default Navbar;
