import gql from 'graphql-tag'
import { NetworkStatus } from './commonTypes/index'

export const aboutPageDataLocalQuery = gql`
  query AboutPageDataLocal {
    networkStatus @client {
        isConnected
      }
  }
`
export interface AboutDataLocal extends NetworkStatus {}
