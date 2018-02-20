import * as React from 'react'
import { graphql, compose, OptionProps } from 'react-apollo'
import { aboutPageDataLocalQuery, AboutDataLocal, updateNetworkStatusQuery } from '../../state/clientQueries'

export type Props = OptionProps<{}, AboutDataLocal>

const withData = compose(
  graphql<{}, {}, Props>(updateNetworkStatusQuery),
  graphql<AboutDataLocal, {}, Props>(aboutPageDataLocalQuery)
)

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

export default withData(About)
