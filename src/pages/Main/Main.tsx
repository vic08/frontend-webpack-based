import * as React from 'react'
import { graphql, QueryProps, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { MainDataQuery } from '@@types'

interface ClientData {
  networkStatus: {
    isConnected: boolean | undefined
  }
}

export type Props = {
  data: MainDataQuery & ClientData
} & QueryProps

type InputProps = {}

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

const withData = compose(
  graphql<MainDataQuery, InputProps, Props>(query, {
    options: {
      variables: {
        limit: 100
      }
    }
  }),
  graphql<ClientData, {}, Props>(localQuery)
)

class Main extends React.PureComponent<Props> {

  // componentWillReceiveProps (nextProps) {}

  render () {
    return <div className='main'>
      This is main page
      {this.props.data && this.props.data.allPeople ? this.props.data.allPeople.nodes.map(person => person ?
        <div key={person.id} className='person'>
          {person.firstName} {person.lastName}
        </div> : null) : null}
      <div>
        Is
        connected: {this.props.data.networkStatus.isConnected ? this.props.data.networkStatus.isConnected.toString() : 'false'}
      </div>
    </div>
  }
}

export default withData(Main)
