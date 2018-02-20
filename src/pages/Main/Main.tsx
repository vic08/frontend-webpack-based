import * as React from 'react'
import { graphql, compose, OptionProps } from 'react-apollo'
import { MainDataQuery } from '@@types'
import { mainDataQuery } from '../../state/queries/'
import { mainPageLocalDataQuery, MainDataLocal } from '../../state/clientQueries'

export type Props = OptionProps<{}, MainDataQuery> & { clientData: MainDataLocal}

type InputProps = {}

const withData = compose(
  graphql<MainDataQuery, InputProps, Props>(mainDataQuery, {
    options: {
      variables: {
        limit: 100
      }
    }
  }),
  graphql<MainDataLocal, {}, Props>(mainPageLocalDataQuery, { name: 'clientData' })
)

class Main extends React.PureComponent<Props> {
  render () {
    return <div className='main'>
      This is main page
      {this.props.data && this.props.data.allPeople ? this.props.data.allPeople.nodes.map(person => person ?
        <div key={person.id} className='person'>
          {person.firstName} {person.lastName}
        </div> : null) : null}
      <div>
        Is connected: {this.props.clientData.networkStatus.isConnected ? this.props.clientData.networkStatus.isConnected.toString() : 'false'}
      </div>
    </div>
  }
}

export default withData(Main)
