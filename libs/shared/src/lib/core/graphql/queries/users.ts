import gql from 'graphql-tag';

export const GET_USERS = gql`
  query ($where: JSON!){
    users(sort: "asd", limit: 10, start: 0, where: $where) {
      id
      username
      avatarUrl
      name
    }
  }
`;
