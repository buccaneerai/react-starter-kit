import React, {useState} from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GameForm from './GameForm';

const NewGameScreen = function NewGameScreen(props) {
  const {updateGame,game} = props;
  const [formValues, setFormValues] = useState(
    pick(game, 'title', 'url', 'categories')
  );
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>Edit Game</h1>
        </Col>
        <Col md={{span: 6, offset: 3}}>
          <GameForm
            formValues={formValues}
            onChange={(fieldName, value) => setFormValues({
              ...formValues,
              [fieldName]: value
            })}
            onSubmit={() => updateGame(formValues)}
          />
        </Col>
      </Row>
    </Container>
  );
};

NewGameScreen.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
  }),
  updateGame: PropTypes.func.isRequired,
};

export default NewGameScreen;
