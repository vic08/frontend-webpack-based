import { combineReducers } from 'redux'
import { LOAD_COINMARKET_DATA_SUCCESS } from '../constants/actionTypes'
import { routerReducer, RouterState } from 'react-router-redux'
// import { DispatchProp } from 'react-redux'

// todo: Global store type will consist of sub reducer store types
export type GlobalStore = {
  something: string,
  shmamfing: string,
  cryptoData: {
    'total_market_cap_usd': number,
    'total_24h_volume_usd': number,
    'bitcoin_percentage_of_market_cap': number,
    'active_currencies': number,
    'active_assets': number,
    'active_markets': number,
    'last_updated': number
  } | null,
  router: RouterState | null
}

// export type ReduxStore = GlobalStore & DispatchProp<GlobalStore>

export const defaultState: GlobalStore = {
  something: 'something',
  shmamfing: 'shmamging',
  cryptoData: null,
  router: null
}

// todo: define interface for actions
export default combineReducers<GlobalStore>({

  router: routerReducer,

  something: (state = defaultState.something, action) => state,

  shmamfing: (state = defaultState.shmamfing, action) => state,

  cryptoData: (state = defaultState.cryptoData, action) => {
    if (action.type === LOAD_COINMARKET_DATA_SUCCESS) {
      return { ...state, ...action.cryptoData }
    }
    return state
  }

})
