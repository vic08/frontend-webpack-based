import * as React from 'react'
import { RootState } from '../../reducers'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { requestCoinmarketData } from '../../actions'

export type Props = {
  cryptoData: RootState['cryptoData'],
  dispatch: Dispatch<RootState>
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

export default connect((state: RootState) => ({ cryptoData: state.cryptoData }))(Main)
