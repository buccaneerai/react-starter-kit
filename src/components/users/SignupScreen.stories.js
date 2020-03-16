import React from 'react';
import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {text,withKnobs} from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
// import { linkTo } from '@storybook/addon-links';

import SignupScreen from './SignupScreen';

storiesOf('Users', module)
  .addDecorator(withKnobs)
  .add(
    'SignupScreen',
    () => (
      <SignupScreen
        createUser={action('createUser')}
      />
    )
  );
