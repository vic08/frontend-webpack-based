import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          }
        }
        cache.writeData({ data })
        return null
      }
    }
  },
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: true
    }
  }
})

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql' // todo: put this in config
})

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    httpLink
  ]),
  cache,
  connectToDevTools: REACT_APP_DEVELOPMENT
})

export default client
