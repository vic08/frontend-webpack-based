import * as React from 'react'
import './App.css'
import { Router, Link, Route } from 'react-router-dom'
import apolloClient from './state/apolloClient'
import ComponentLoader, { Context } from './components/ComponentLoader/ComponentLoader'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory } from 'history'

const logo = require('./logo.svg')

export const history = createBrowserHistory()

class App extends React.Component {

  render () {
    return (
      <ApolloProvider client={apolloClient}>
        <Router history={history}>
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo'/>
              <h1 className='App-title'>Welcome to React</h1>
              <Link to={'/'}>Main</Link>
              &nbsp;
              <Link to={'/about'}>About</Link>
            </header>
            <Route exact path={`/`} render={() => <ComponentLoader contextName={Context.Main}/>}/>
            <Route path={`/about`} render={() => <ComponentLoader contextName={Context.About}/>}/>
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
