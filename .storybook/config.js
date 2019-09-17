import {configure, setAddon, addDecorator} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {withKnobs} from '@storybook/addon-knobs';

setAddon(JSXAddon);
addDecorator(withKnobs);

// search source folder to find files that end in stories.js
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
