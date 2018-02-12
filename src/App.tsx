import * as React from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Main from './pages/Main/Main'
import About from './pages/About/About'

const logo = require('./logo.svg')

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h1 className='App-title'>Welcome to React</h1>
              <Link to={'/'}>Main</Link>
              <Link to={'/about'}>About</Link>
            </header>
            <Route path={`/`} component={Main}/>
            <Route path={`/about`} component={About}/>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
