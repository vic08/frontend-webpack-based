import * as React from 'react'
import { graphql, QueryProps } from 'react-apollo'
import gql from 'graphql-tag'
import { MainDataQuery } from '@@types'

export type Props = {
  data: MainDataQuery
} & QueryProps

const query = gql`
  query MainData {
    allPeople(first: 100) {
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

const withData = graphql<MainDataQuery, {}, Props>(query)

class Main extends React.PureComponent<Props> {

  // componentWillReceiveProps (nextProps) {}

  render () {
    return <div className='main'>
      This is main page
      {this.props.data.allPeople ? this.props.data.allPeople.nodes.map(person => person ?
        <div key={person.id} className='person'>
          {person.firstName} {person.lastName}
        </div> : null) : null}
    </div>
  }
}

export default withData(Main)
