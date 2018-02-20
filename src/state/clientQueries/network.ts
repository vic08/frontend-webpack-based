import gql from 'graphql-tag'

export const updateNetworkStatusQuery = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`
