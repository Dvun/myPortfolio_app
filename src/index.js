import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from 'react-router-dom'
import App from './app/App'
import {GlobalStyled} from './styles/GlobalStyles'
import {store} from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyled/>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
