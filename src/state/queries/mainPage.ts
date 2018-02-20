import gql from 'graphql-tag'

export const mainDataQuery = gql`
  query MainData($limit: Int!) {
    allPeople(first: $limit) {
      nodes {
        id
        nodeId
        firstName
        lastName
        about
        createdAt
        updatedAt
      }
    }
  }
`
