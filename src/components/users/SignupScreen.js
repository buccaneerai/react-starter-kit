import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AuthForm from './AuthForm';

const SignupScreen = function SignupScreen(props) {
  const {
    initialEmail,
    initialPassword,
    signup,
  } = props;
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const authFormProps = {
    email,
    password,
    setEmail: event => setEmail(event.target.value),
    setPassword: event => setPassword(event.target.value),
    onSubmit: () => signup({email, password})
  };
  return (
    <Container fluid>
      <Row style={{marginTop: '20vh'}} className="justify-content-md-center">
        <Col
          className='text-center'
          xs={{span: 12}}
          sm={{span: 8}}
          md={{span: 6}}
          lg={{span: 4}}
          xl={{span: 3}}
        >
          <h1 style={{marginBottom: '1em'}}> Signup </h1>
          <AuthForm {...authFormProps} />
          <span>
            <Link to='/signup'>
              Don't have an account? Sign up.
            </Link>
          </span>
          <br/>
          <span>
            <Link to='/reset-password'>
              Reset password
            </Link>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

SignupScreen.defaultProps = {
  initialEmail: '',
  initialPassword: '',
};

SignupScreen.propTypes = {
  initialEmail: PropTypes.string,
  initialPassword: PropTypes.string,
  signup: PropTypes.func.isRequired,
};

export default SignupScreen;
