import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { object, text } from '@storybook/addon-knobs';

import Loading from './Loading';

storiesOf('Kit', module)
  .add(
    'loading screen',
    () => <Loading/>
  );
