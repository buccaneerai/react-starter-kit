import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../scss/theme.scss';
import AuthForm from './AuthForm';


export default { title: 'Users', decorators: [withKnobs]};

export const authForm = () => (
  <Container>
    <Row style={{marginTop: '1em'}}>
      <Col
        xs={{span: 12}}
        sm={{span: 6, offset: 3}}
        md={{span: 4, offset: 4}}
        lg={{span: 4, offset: 4}}
        xl={{span: 2, offset: 5}}
      >
        <AuthForm
          email={text('email', '')}
          password={text('password', '')}
          submitText={text('submitText', 'Login')}
          onSubmit={action('submit-form')}
          setEmail={action('set-email')}
          setPassword={action('set-password')}
        />
      </Col>
    </Row>
  </Container>
);
