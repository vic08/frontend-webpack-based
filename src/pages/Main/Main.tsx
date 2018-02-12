import * as React from 'react'
import { GlobalStore } from '../../reducers'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { requestCoinmarketData } from '../../actions'

export type Props = {
  cryptoData: GlobalStore['cryptoData'],
  dispatch: Dispatch<GlobalStore>
}

class Main extends React.PureComponent<Props> {

  componentDidMount () {
    if (!this.props.cryptoData) {
      this.props.dispatch(requestCoinmarketData())
    }
  }

  render () {
    return <div className='main'>
      This is main page
      {this.props.cryptoData !== null ? this.props.cryptoData.active_currencies : 'Loading data...'}
    </div>
  }
}

export default connect((state: GlobalStore) => ({ cryptoData: state.cryptoData }))(Main)
