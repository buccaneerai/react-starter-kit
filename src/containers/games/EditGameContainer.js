import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetch as fetchGames,
  update as updateGame
} from '../../redux/reducers/games';
import EditGameScreen from '../../components/games/EditGameScreen';

const NewGameContainer = function NewGameContainer(props) {
  const {games,match} = props;
  const _fetchGames = props.fetchGames;
  console.log('PROPS', props);
  const gameId = match.params.gameId;
  useEffect(
    () => {
      _fetchGames({
        filter: {_id: gameId},
      });
      return;
    },
    [_fetchGames, gameId]
  );
  if (games.fetching) return <div>Loading</div>;
  const game = (
    games && games.db && games.db.entities && games.db.entities.games
    ? games.db.entities.games[gameId]
    : null
  );
  if (!game) return <div>Game Not Found</div>;
  return (
    <EditGameScreen
      game={game}
      updateGame={props.updateGame}
    />
  );
};

function mapState(state) {
  return {
    games: state.games,
  };
}

function mapDispatch(dispatch) {
  return {
    fetchGames: params => dispatch(fetchGames(params)),
    updateGame: params => dispatch(updateGame(params)),
  };
}

NewGameContainer.propTypes = {
  updateGame: PropTypes.func.isRequired,
};

export default connect(mapState,mapDispatch)(NewGameContainer);
