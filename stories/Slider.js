import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import {withKnobs, text, number} from '@kadira/storybook-addon-knobs'
import Slider from '../src/components/Slider'

storiesOf('Slider', module)
  .add('Primary', () => (
    <Slider
      max={number('Max', 1)}
      min={number('Min', 0)}
      onChange={action('changed')}
      step={number('Step', 0.05)}
      title={text('Title', 'Test Title')}
      value={number('Value', 0.5)}
    />
  ))
