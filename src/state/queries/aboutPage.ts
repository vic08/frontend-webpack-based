import gql from 'graphql-tag'

export const aboutDataQuery = gql`
  query AboutData($limit: Int!) {
    allPosts(first: $limit) {
      nodes {
        id
        body
        topic
      }
      totalCount
    }
  }
`
