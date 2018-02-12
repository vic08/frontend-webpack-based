import { Props } from '../pages/Main/Main'
import { LOAD_COINMARKET_DATA_SUCCESS } from '../constants/actionTypes'
import { Dispatch } from 'redux'
import { GlobalStore } from '../reducers'

export function requestCoinmarketData () {
  return async (dispatch: Dispatch<GlobalStore>, getState: () => GlobalStore) => {
    let response = await fetch('https://api.coinmarketcap.com/v1/global/')
    let data = await response.json() as Props['cryptoData']

    dispatch({
      type: LOAD_COINMARKET_DATA_SUCCESS,
      cryptoData: data
    })
  }
}
