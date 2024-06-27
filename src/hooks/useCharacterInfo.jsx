import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER_INFO = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      gender
      origin {
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

const useCharacterInfo = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id },
  });

  return {
    loading,
    error,
    data,
  };
};

export default useCharacterInfo;
