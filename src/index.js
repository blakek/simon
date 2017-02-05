import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from 'containers/App'
import { defaultTheme } from 'lib/themes'

const renderArea = document.getElementById('app-root')

render((
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
), renderArea)
