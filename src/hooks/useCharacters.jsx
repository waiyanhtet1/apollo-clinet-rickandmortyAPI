import { gql, useQuery } from "@apollo/client";

const CHARACTES_LIST = gql`
  query AllCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharacters = () => {
  const { loading, error, data } = useQuery(CHARACTES_LIST);

  return {
    loading,
    error,
    data,
  };
};

export default useCharacters;
