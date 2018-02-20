import gql from 'graphql-tag'
import { NetworkStatus } from './commonTypes/index'

export const mainPageLocalDataQuery = gql`
  query MainDataLocal {
    networkStatus @client {
        isConnected
      }
  }
`
export interface MainDataLocal extends NetworkStatus {}
