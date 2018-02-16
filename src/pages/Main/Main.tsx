import * as React from 'react'
import { RootState } from '../../reducers'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { requestCoinmarketData } from '../../actions'
import { flow } from 'lodash'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export type Props = {
  apollo: any,
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

const dataQuery = gql`
  {
    query {
      allPeople(first: 100) {
        nodes {
          id,
          nodeId,
          firstName,
          lastName,
          about,
          createdAt,
          updatedAt
        }
      }
    }
  }
`

export default flow(
  connect((state: RootState) => ({
    cryptoData: state.cryptoData,
    apollo: state.apollo
  })),
  graphql(dataQuery)
)(Main)
