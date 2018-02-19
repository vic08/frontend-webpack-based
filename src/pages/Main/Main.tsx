import * as React from 'react'
import { graphql, QueryProps } from 'react-apollo'
import gql from 'graphql-tag'
import { MainDataQuery } from '@@types'

export type Props = {
  data: MainDataQuery
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

const withData = graphql<MainDataQuery, InputProps, Props>(query, {
  options: {
    variables: {
      limit: 100
    }
  }
})

class Main extends React.PureComponent<Props> {

  // componentWillReceiveProps (nextProps) {}

  render () {
    return <div className='main'>
      This is main page
      {this.props.data && this.props.data.allPeople ? this.props.data.allPeople.nodes.map(person => person ?
        <div key={person.id} className='person'>
          {person.firstName} {person.lastName}
        </div> : null) : null}
    </div>
  }
}

export default withData(Main)
