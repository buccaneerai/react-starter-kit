import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Paginator from '../lib/Paginator';
import GamesTable from './GamesTable';

const ManageGames = function ManageGames(props) {
  const { removeGame, pagination, games } = props;
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Games</h1>
          <Link to='/games/create'>Create New</Link>
        </Col>
      </Row>
      <Row>
        <GamesTable documents={games} removeGame={removeGame} />
        <Paginator {...pagination} />
        />
      </Row>
    </Container>
  );
}

ManageGames.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  removeGame: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
    onPageSizeChange: PropTypes.func,
    onPageChange: PropTypes.func,
    documentCount: PropTypes.number,
  })
};

export default ManageGames;
