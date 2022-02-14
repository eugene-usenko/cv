import 'normalize.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, initializeIcons, PartialTheme } from '@fluentui/react'
import { IntlProvider } from 'react-intl'
import { App } from './App'
import { messages } from './shared/locale/en'

initializeIcons()

const appTheme: PartialTheme = {
  palette: {
    // TODO: resereved for the future
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme} id='theme-provider'>
      <IntlProvider locale='en' messages={messages}>
        <App />
      </IntlProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
