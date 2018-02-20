import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, compose, OptionProps } from 'react-apollo'
import { MainDataQuery } from '@@types'

interface ClientData {
  networkStatus: {
    isConnected: boolean | undefined
  }
}

export type Props = OptionProps<{}, MainDataQuery & ClientData>

const mutation = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`

const query = gql`
  query MainData($limit: Int!) {
    allPeople(first: $limit) {
      nodes {
        id
        nodeId
        firstName
        lastName
        about
        createdAt
        updatedAt
      }
    }
  }
`

const localQuery = gql`
  query MainDataLocal {
    networkStatus @client {
        isConnected
      }
  }
`

class About extends React.PureComponent<Props> {

  _onSwitchOffline = () => {
    if (this.props.mutate) this.props.mutate({ variables: { isConnected: false } })
  }

  _onSwitchOnline = () => {
    if (this.props.mutate) this.props.mutate({ variables: { isConnected: true } })
  }

  render () {
    if (!this.props.data) {
      return <div>Loading...</div>
    }
    return <div className='about'>
      This is about page
      We are {this.props.data.networkStatus.isConnected ? 'online' : 'offline'}
      <button onClick={this._onSwitchOffline}>go offline</button>
      <button onClick={this._onSwitchOnline}>go online</button>
    </div>
  }

}

export default compose(
  graphql<{}, {}, Props>(mutation),
  graphql<{}, {}, Props>(query, {
    options: {
      variables: {
        limit: 100
      }
    }
  }),
  graphql<ClientData, {}, Props>(localQuery)
)(About)
