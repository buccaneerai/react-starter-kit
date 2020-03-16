import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GameForm from './GameForm';

const NewGameScreen = function NewGameScreen(props) {
  const {createGame} = props;
  const [formValues, setFormValues] = useState({
    title: '',
    url: '',
    categories: []
  });
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>New Game</h1>
        </Col>
        <Col md={{span: 6, offset: 3}}>
          <GameForm
            formValues={formValues}
            onChange={(fieldName, value) => setFormValues({
              ...formValues,
              [fieldName]: value
            })}
            onSubmit={() => createGame(formValues)}
          />
        </Col>
      </Row>
    </Container>
  );
};

NewGameScreen.propTypes = {
  createGame: PropTypes.func.isRequired,
};

export default NewGameScreen;
