export default {
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
}