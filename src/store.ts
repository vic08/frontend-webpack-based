import { applyMiddleware, createStore, Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import thunk from 'redux-thunk'
import rootReducer, { GlobalStore } from './reducers/'
import { createLogger } from 'redux-logger'

let history = createHistory()
let store: Store<GlobalStore>

if (REACT_APP_DEVELOPMENT) {
  store = createStore<GlobalStore>(
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
  store = createStore<GlobalStore>(
    rootReducer,
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
}

export { history }
export default store
