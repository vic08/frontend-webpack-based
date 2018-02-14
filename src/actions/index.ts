import { LOAD_COINMARKET_DATA_SUCCESS } from '../constants/actionTypes'
import { Dispatch, Action } from 'redux'
import { RootState } from '../reducers'

export interface LoadCryptoDataAction extends Action {
  cryptoData: RootState['cryptoData']
}

export function requestCoinmarketData () {
  return async (dispatch: Dispatch<RootState>, getState: () => RootState) => {
    let response = await fetch('https://api.coinmarketcap.com/v1/global/')
    let data = await response.json() as RootState['cryptoData']

    dispatch({
      type: LOAD_COINMARKET_DATA_SUCCESS,
      cryptoData: data
    } as LoadCryptoDataAction)
  }
}
