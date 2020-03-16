import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import Button from '../lib/Button';

const AuthForm = function AuthForm(props) {
  const {
    email,
    password,
    onSubmit,
    setEmail,
    setPassword,
    submitText
  } = props;
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type='email'
          placeholder='email'
          value={email}
          onChange={setEmail}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type='password'
          placeholder='password'
          value={password}
          onChange={setPassword}
        />
      </Form.Group>
      <Form.Group>
        <Button
          block
          disabled={!email || !password}
          onClick={onSubmit}
        >
          {submitText}
        </Button>
      </Form.Group>
    </Form>
  );
};

AuthForm.defaultProps = {
  submitText: 'Login',
  email: '',
  password: '',
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  submitText: PropTypes.string,
};

export default AuthForm;
