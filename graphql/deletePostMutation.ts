import gql from 'graphql-tag';

export const deletePostMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
