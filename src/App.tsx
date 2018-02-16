import * as React from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import apolloClient from './api/apolloClient'
import store, { history } from './store'
import ComponentLoader, { Context } from './components/ComponentLoader/ComponentLoader'
import ApolloProvider from 'react-apollo/ApolloProvider'

const logo = require('./logo.svg')

class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ConnectedRouter history={history}>
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
          </ConnectedRouter>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
