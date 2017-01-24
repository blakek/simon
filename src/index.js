import React from 'react'
import { render } from 'react-dom'
import { App } from 'containers/App'

const renderArea = document.getElementById('app-root')

render((
  <App />
), renderArea)
