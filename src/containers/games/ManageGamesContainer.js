import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import pick from 'lodash/pick';
import Container from 'react-bootstrap/Container';

import {
  create as createGame,
  fetch as fetchGames,
  remove as removeGame
} from '../../redux/reducers/games';
import Panel from '../../components/lib/Panel';
import ManageGames from '../../components/games/ManageGames';

const ManageGamesContainer = function ManageGamesContainer(props) {
  const { games, users, location, removeGame } = props;
  const _fetchGames = props.fetchGames;
  const [pageIndex, setPageIndex] = useState(
    new URLSearchParams(location.search).get('pageIndex') || 0
  );
  const [pageSize, setPageSize] = useState(
    new URLSearchParams(location.search).get('limit') || 25
  );
  useEffect(
    () => {
      _fetchGames({
        skip: pageIndex * pageSize,
        limit: pageSize,
        filter: {},
      });
      return;
    },
    [_fetchGames, pageIndex, pageSize]
  );
  console.log('games', games);
  if (!users.user || !users.user.isAdmin) {
    return (
      <Panel status='error'>
        Access Denied. You must be logged in as an administrator to view this page.
      </Panel>
    );
  }
  const gamesArr = (
    games && games.db && games.db.entities && games.db.entities.games
    ? Object.values(games.db.entities.games)
    : []
  );
  return (
    <Container>
      {games.fetchError ?
        <Panel status='error'>
          <span className='text-danger'>
            Error: {games.fetchError.message}
          </span>
        </Panel>
      : <span/>
      }
      {gamesArr && gamesArr.length
        ? <ManageGames
          games={gamesArr}
          removeGame={removeGame}
          pagination={{
            pageSize,
            pageIndex,
            onPageSizeChange: setPageSize,
            onPageChange: setPageIndex,
          }}
        />
        : <div/>
      }
    </Container>
  );
};

ManageGamesContainer.defaultProps = {
  token: null,
  users: null,
};

ManageGamesContainer.props = {
  token: PropTypes.string,
  games: PropTypes.object,
  users: PropTypes.object,
  fetchGames: PropTypes.func.isRequired,
  removeGame: PropTypes.func.isRequired,
};

function mapState(state) {
  return pick(state, 'users', 'games');
}

function mapDispatch(dispatch) {
  return {
    createGame: params => dispatch(createGame(params)),
    fetchGames: params => dispatch(fetchGames(params)),
    removeGame: params => dispatch(removeGame(params)),
  };
}

export default connect(mapState, mapDispatch)(ManageGamesContainer);

