import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const allowedCategories = [
  {label: 'Card Games', value: 'Card Games'},
  {label: 'Classic Games', value: 'Classic Games'},
  {label: 'Puzzles', value: 'Puzzles'},
  {label: 'Word Games', value: 'Word Games'},
];

const GameForm = function GameForm(props) {
  const {buttonText,formValues,onChange,onSubmit} = props;
  return (
    <Form>
      <Form.Group>
        <Form.Label>title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Asteroids'
          value={formValues.title}
          onChange={e => onChange('title', e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>url</Form.Label>
        <Form.Control
          type='text'
          placeholder='https://foo.com'
          value={formValues.url}
          onChange={e => onChange('url', e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>categories</Form.Label>
        <Form.Control
          as="select"
          value={formValues.categories}
          onChange={e => onChange('categories', [e.target.value])}
        >
          {allowedCategories.map(
            c => <option value={c.value}>{c.label}</option>
          )}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Button bar variant='primary' onClick={onSubmit}>
          {buttonText}
        </Button>
      </Form.Group>
    </Form>
  );
};

GameForm.defaultProps = {
  formValues: {
    title: '',
    url: '',
    categories: [],
  },
  buttonText: 'Save',
};

GameForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    categories: PropTypes.string,
  }),
  buttonText: PropTypes.string,
};

export default GameForm;
