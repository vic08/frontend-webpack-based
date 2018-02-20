import * as React from 'react'
import { graphql, compose, OptionProps } from 'react-apollo'
import { aboutPageDataLocalQuery, AboutDataLocal, updateNetworkStatusQuery } from '../../state/clientQueries'
import { aboutDataQuery } from '../../state/queries/'
import { AboutDataQuery } from '@@types'

export type Props = OptionProps<{}, AboutDataQuery> & { clientData: AboutDataLocal }

const withData = compose(
  graphql<{}, {}, Props>(updateNetworkStatusQuery),
  graphql<{}, {}, Props>(aboutDataQuery, {
    options: {
      variables: {
        limit: 100
      }
    }
  }),
  graphql<AboutDataLocal, {}, Props>(aboutPageDataLocalQuery, { name: 'clientData' })
)

class About extends React.PureComponent<Props> {

  _onSwitchOffline = () => {
    if (this.props.mutate) this.props.mutate({ variables: { isConnected: false } })
  }

  _onSwitchOnline = () => {
    if (this.props.mutate) this.props.mutate({ variables: { isConnected: true } })
  }

  render () {

    return <div className='about'>
      This is about page
      We are {this.props.clientData.networkStatus.isConnected ? 'online' : 'offline'}
      <button onClick={this._onSwitchOffline}>go offline</button>
      <button onClick={this._onSwitchOnline}>go online</button>
      <div>
        Total posts count: {this.props.data && this.props.data.allPosts ? this.props.data.allPosts.totalCount : 0}
        {this.props.data && this.props.data.allPosts && this.props.data.allPosts.nodes.map(post => <div>{post ? post.topic : null}</div>)}
      </div>
    </div>
  }

}

export default withData(About)
