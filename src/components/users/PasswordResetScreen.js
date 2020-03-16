import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from '../lib/Button';

function PasswordResetForm(props) {
  const {fields,onSubmit} = props;
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type='email'
          placeholder='email'
          value={fields.email.value || ''}
          onChange={fields.email.onChange}
        />
      </Form.Group>
      <Form.Group>
        <Button
          block
          disabled={!fields.email.value}
          onClick={onSubmit}
        >
          Reset Password
        </Button>
      </Form.Group>
    </Form>
  );
}

const PasswordResetScreen = function PasswordResetScreen(props) {
  return (
    <Container fluid>
      <Row style={{marginTop: '20vh'}}>
        <Col
          className='text-center'
          xs={{span: 12}}
          sm={{span: 8, offset: 2}}
          md={{span: 6, offset: 3}}
          lg={{span: 4, offset: 4}}
          xl={{span: 4, offset: 4}}
        >
          <h1 style={{marginBottom: '1em'}}> Reset Password </h1>
          <PasswordResetForm {...props} />
        </Col>
      </Row>
    </Container>
  );
};


PasswordResetScreen.propTypes = {
  fields: PropTypes.shape({
    email: PropTypes.shape({
      value: PropTypes.string,
      onChange: PropTypes.func.isRequired,
    })
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordResetScreen;
