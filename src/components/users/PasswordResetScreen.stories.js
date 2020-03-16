import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import '../../scss/theme.scss';
import PasswordResetScreen from './PasswordResetScreen';

export default { title: 'Users', decorators: [withKnobs]};

export const resetPasswordScreen = () => (
  <PasswordResetScreen
    fields={{email: {
      value: text('email.value', ''),
      onChange: action('email-changed'),
    }}}
    onSubmit={action('submitted')}
  />
);
