import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = function CustomNavbar(props) {
  const {email,logout} = props;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href='/'>Joygage</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        {email
          ? <NavDropdown title={email} id="basic-nav-dropdown">
            <NavDropdown.Item href='/admin'>Admin Dashboard</NavDropdown.Item>
            <NavDropdown.Item href='#'onClick={logout}>Sign Out</NavDropdown.Item>
          </NavDropdown>
          :
          <Nav>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/signup'>Sign Up</Nav.Link>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

CustomNavbar.defaultProps = {
  email: null,
};

CustomNavbar.propTypes = {
  email: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

export default CustomNavbar;
