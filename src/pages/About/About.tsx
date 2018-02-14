import * as React from 'react'
import { RootState } from '../../reducers'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

export type Props = {
  cryptoData: RootState['cryptoData'],
  dispatch: Dispatch<RootState>
}

class About extends React.PureComponent<Props> {

  render () {
    return <div className='about'>
      This is about page
    </div>
  }

}

export default connect((state: RootState) => ({ cryptoData: state.cryptoData }))(About)
