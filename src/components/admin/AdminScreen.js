import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const cards = [
  {
    name: 'Users',
    iconClasses: 'fas fa-users fa-5x',
    buttons: [
      <span>
        <Button
          color='link'
          key='user-create'
          to='#'
          id='user-create-btn'
          style={{padding: '0em', verticalAlign: 'unset'}}
        >
          Create
        </Button>
      </span>,
      <Link key='user-view' to='/users'>View</Link>
    ]
  },
  {
    name: 'Licenses',
    iconClasses: 'fas fa-fingerprint fa-5x',
    buttons: [
      // <Link key='license-view' to='/licenses'>View</Link>,
      <Link key='license-create' to='/licenses/create'>Create</Link>,
      <Link key='license-view' to='/licenses'>View</Link>,
      <Link key='license-view-archive' to='/licenses?archived=true'>Archived Licenses</Link>
    ]
  },
  {
    name: 'License Usage',
    path: '/license-uses',
    iconClasses: 'fas fa-chart-pie fa-5x',
    buttons: [],
  }
];

const AdminScreen = function AdminScreen(props) {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>Admin Dashboard</h1>
        </Col>
      </Row>
      <Row>
        {cards.map(c => (
          <Col md={3}>
            <Card>
              <Card.Body>
                <i className={c.iconClasses + ' text-primary text-center'}/>
                <Card.Title>{c.name}</Card.Title>
                {c.buttons.map(b => b)}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

AdminScreen.propTypes = {

};

AdminScreen.defaultProps = {

};

export default AdminScreen;
