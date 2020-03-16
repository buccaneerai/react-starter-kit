import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withKnobs, select, text} from "@storybook/addon-knobs";

import '../../styles/scss/theme.scss';
import Button from './Button';

export default { title: 'Component Library', decorators: [withKnobs] };

const colorOptions = {
  primary: 'primary',
  outline: 'outline-primary',
  success: 'success',
  outlineSuccess: 'outline-success',
  danger: 'danger',
  outlineOutline: 'outline-danger',
  warning: 'warning',
  warningOutline: 'outline-warning',
  info: 'info',
  infoOutline: 'outline-info',
  light: 'light',
  dark: 'dark',
  link: 'link',
  secondary: 'secondary',
};

export const button = () => {
  const color = select('color', colorOptions, 'primary');
  return (
    <Container>
      <Row style={{margin: '1em'}}>
        <Button variant={color}>
          {text('Medium button text', 'Submit me')}
        </Button>
      </Row>
      <Row style={{margin: '1em'}}>
        <Button variant={color} size='sm'>
          {text('Small button text', 'Small Button')}
        </Button>
      </Row>
      <Row style={{margin: '1em'}}>
        <Button variant={color} size='xs'>
          {text('XS button text', 'XS Button')}
        </Button>
      </Row>
      <Row style={{margin: '1em'}}>
        <Button variant={color} size='lg'>
          {text('Large button text', 'Large Button')}
        </Button>
      </Row>
    </Container>
  );
};
