import * as React from 'react'
import { GlobalStore } from '../../reducers'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

export type Props = {
  cryptoData: GlobalStore['cryptoData'],
  dispatch: Dispatch<GlobalStore>
}

class About extends React.PureComponent<Props> {

  render () {
    return <div className='main'>
      This is about page

    </div>
  }

}

export default connect((state: GlobalStore) => ({ cryptoData: state.cryptoData }))(About)
