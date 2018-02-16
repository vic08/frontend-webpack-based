import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export type Props = {}

class Main extends React.PureComponent<Props> {

  // componentDidMount () {}

  componentWillReceiveProps (nextProps) {
    debugger
  }

  render () {
    return <div className='main'>
      This is main page
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

export default graphql(dataQuery)(Main)
