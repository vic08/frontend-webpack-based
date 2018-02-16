import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ReduxCache } from 'apollo-cache-redux'
import store from '../store'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql'
  }),
  cache: new ReduxCache({ store })
})

export default client
