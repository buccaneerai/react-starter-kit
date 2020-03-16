import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Panel from '../lib/Panel';
import Paginator from '../lib/Paginator';
import UsersTable from './UsersTable';

const ManageUsers = function ManageUsers(props) {
  const { makeAdmin, pagination, users } = props;
  console.log('USERS', users);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Users</h1>
        </Col>
      </Row>
      <Row>
        <UsersTable users={users} makeAdmin={makeAdmin} />
        <Paginator {...pagination} />
        />
      </Row>
    </Container>
  );
}

ManageUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  makeAdmin: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
    onPageSizeChange: PropTypes.func,
    onPageChange: PropTypes.func,
    documentCount: PropTypes.number,
  })
};

export default ManageUsers;
