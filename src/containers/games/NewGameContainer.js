import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {create as createGame} from '../../redux/reducers/games';
import NewGameScreen from '../../components/games/NewGameScreen';

const NewGameContainer = function NewGameContainer(props) {
  return <NewGameScreen createGame={props.createGame} />;
};

function mapState(state) {
  return {};
}

function mapDispatch(dispatch) {
  return {
    createGame: params => dispatch(createGame(params)),
  };
}

NewGameContainer.propTypes = {
  createGame: PropTypes.func.isRequired,
};

export default connect(mapState,mapDispatch)(NewGameContainer);
