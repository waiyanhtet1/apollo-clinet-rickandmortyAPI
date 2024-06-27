import { gql } from "@apollo/client";

export const CHARACTES_LIST = gql`
  query AllCharacters {
    characters {
      results {
        id
        name
        image
        species
        origin {
          name
        }
      }
    }
  }
`;
