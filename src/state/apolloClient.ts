import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import clientResolvers from './clientResolvers/'
import clientDefaults from './clientDefaults/'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: clientResolvers,
  defaults: clientDefaults
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

client.onResetStore(() => Promise.resolve().then(stateLink.writeDefaults))

export default client
