/* eslint-disable react/jsx-fragments */
import React from 'react'
import { render } from 'react-dom'

if (module.hot) module.hot.accept()

const a = 1

const App = () => (
  <React.Fragment>
    <h1>Hello React!</h1>
    <p>
      {a > 2 ? 'true' : 'false'}
    </p>
  </React.Fragment>
)

render(<App />, document.getElementById('app'))
