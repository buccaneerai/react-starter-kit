import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Paginator from '../lib/Paginator';
import ShowsTable from './ShowsTable';

const ManageShows = function ManageShows(props) {
  const { removeShow, pagination, shows } = props;
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Shows</h1>
          <Link to='/shows/create'>Create New</Link>
        </Col>
      </Row>
      <Row>
        <ShowsTable documents={shows} removeShow={removeShow} />
        <Paginator {...pagination} />
        />
      </Row>
    </Container>
  );
}

ManageShows.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object),
  removeShow: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
    onPageSizeChange: PropTypes.func,
    onPageChange: PropTypes.func,
    documentCount: PropTypes.number,
  })
};

export default ManageShows;
