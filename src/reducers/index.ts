import { combineReducers } from 'redux'
import { LOAD_COINMARKET_DATA_SUCCESS } from '../constants/actionTypes'
import { routerReducer, RouterState } from 'react-router-redux'
import { Action } from 'redux'
import { LoadCryptoDataAction } from '../actions'

export type GlobalStore = Readonly<{
  something: string,
  shmamfing: string,
  cryptoData: Readonly<{
    'total_market_cap_usd': number,
    'total_24h_volume_usd': number,
    'bitcoin_percentage_of_market_cap': number,
    'active_currencies': number,
    'active_assets': number,
    'active_markets': number,
    'last_updated': number
  }> | null,
  router: RouterState | null
}>

export const defaultState: GlobalStore = {
  something: 'something',
  shmamfing: 'shmamging',
  cryptoData: null,
  router: null
}

// todo: use redux interface for actions
export default combineReducers<GlobalStore>({

  router: routerReducer,

  something: (state: GlobalStore['something'] = defaultState.something, action) => state,

  shmamfing: (state = defaultState.shmamfing, action: Action) => state,

  cryptoData: (state = defaultState.cryptoData, action: LoadCryptoDataAction) => {
    if (action.type === LOAD_COINMARKET_DATA_SUCCESS) {
      return { ...state, ...action.cryptoData }
    }
    return state
  }

})
