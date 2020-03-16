import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withKnobs, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import '../../scss/theme.scss';
import LoginScreen from './LoginScreen';

export default { title: 'Users', decorators: [withKnobs]};

export const loginScreen = () => (
  <MemoryRouter initialEntries={['/']}>
    <LoginScreen
      initialEmail={text('initialEmail', '')}
      initialPassword={text('initialPassword', '')}
      login={action('login')}
    />
  </MemoryRouter>
);
