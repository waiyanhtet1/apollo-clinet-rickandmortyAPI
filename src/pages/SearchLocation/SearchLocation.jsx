import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query getCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
          type
          dimension
        }
      }
    }
  }
`;

const SearchLocation = () => {
  const [getLocation, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION
  );

  const [inputName, setInputName] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3>Search Location by character name</h3>
      <div className="input-search">
        <input
          type="text"
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Morty Smith"
        />
        <button onClick={() => getLocation({ variables: { name: inputName } })}>
          Search
        </button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Loading...</div>}
      {data && (
        <ul>
          {data?.characters?.results?.map((res) => (
            <li key={res?.location?.id}>{res?.location?.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchLocation;
