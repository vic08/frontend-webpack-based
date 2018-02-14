import { LOAD_COINMARKET_DATA_SUCCESS } from '../constants/actionTypes'
import { Dispatch, Action } from 'redux'
import { GlobalStore } from '../reducers'

export interface LoadCryptoDataAction extends Action {
  cryptoData: GlobalStore['cryptoData']
}

export function requestCoinmarketData () {
  return async (dispatch: Dispatch<GlobalStore>, getState: () => GlobalStore) => {
    let response = await fetch('https://api.coinmarketcap.com/v1/global/')
    let data = await response.json() as GlobalStore['cryptoData']

    dispatch({
      type: LOAD_COINMARKET_DATA_SUCCESS,
      cryptoData: data
    } as LoadCryptoDataAction)
  }
}
