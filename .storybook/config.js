import { configure, addDecorator } from '@kadira/storybook'
import { defaultTheme } from 'lib/themes'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import backgroundColor from 'react-storybook-decorator-background'
import {withKnobs} from '@kadira/storybook-addon-knobs'

function loadStories() {
  require('../stories')
}

addDecorator(backgroundColor(['#222222', '#ffffff']))
addDecorator((story) => (
  <ThemeProvider theme={defaultTheme}>
    {story()}
  </ThemeProvider>
))
addDecorator(withKnobs)

configure(loadStories, module)
