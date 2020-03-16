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
      // <span>
      //   <Button
      //     color='link'
      //     key='user-create'
      //     to='#'
      //     id='user-create-btn'
      //     style={{padding: '0em', verticalAlign: 'unset'}}
      //   >
      //     Create
      //   </Button>
      // </span>,
      <Link key='user-view' to='/admin/users'>Manage</Link>
    ]
  },
  {
    name: 'Playlists',
    iconClasses: 'fa fa-list fa-5x',
    buttons: [
      <Link key='series-create' to='/series/create'>Create</Link>,
      <Link key='series-view' to='/admin/series'>Manage</Link>,
    ]
  },
  {
    name: 'Shows',
    iconClasses: 'fa fa-film fa-5x',
    buttons: [
      <Link key='shows-create' to='/shows/create'>Create</Link>,
      <Link key='shows-view' to='/admin/shows'>Manage</Link>,
    ]
  },
  {
    name: 'Genres',
    iconClasses: 'fas fa-theater-masks fa-5x',
    buttons: [
      <Link key='shows-create' to='/genres/create'>Create</Link>,
      <Link key='shows-view' to='/admin/genres'>Manage</Link>,
    ]
  },
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
                {c.buttons.map(b => <span style={{marginRight: '0.5em'}}>{b}</span>)}
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
