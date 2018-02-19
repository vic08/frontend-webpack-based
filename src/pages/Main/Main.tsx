import * as React from 'react'
import { graphql, QueryProps } from 'react-apollo'
import gql from 'graphql-tag'

export type Props = {
  data: Response
}

export type Response = {
  allPeople: {
    nodes: Array<{
      // The primary unique identifier for the person.
      id: number,
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      nodeId: string,
      // The person’s first name.
      firstName: string,
      // The person’s last name.
      lastName: string | null,
      // A short description about the user, written by the user.
      about: string | null,
      // The time this person was created.
      createdAt: string | null,
      updatedAt: string | null
    }>
  }
}

type WrappedProps = Props & QueryProps

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

const withData = graphql<Response, {}, WrappedProps>(query)

class Main extends React.PureComponent<WrappedProps> {

  // componentDidMount () {}

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
