import { applyMiddleware, createStore, Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import thunk from 'redux-thunk'
import rootReducer, { RootState } from './reducers/'
import { createLogger } from 'redux-logger'

let history = createHistory()
let store: Store<RootState>

if (REACT_APP_DEVELOPMENT) {
  store = createStore<RootState>(
    rootReducer,
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      createLogger({
        diff: true,
        collapsed: true,
        logErrors: false
      })
    )
  )
} else {
  store = createStore<RootState>(
    rootReducer,
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
}

export { history }
export default store
