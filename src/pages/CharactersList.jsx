import { useQuery } from "@apollo/client";
import { CHARACTES_LIST } from "../quaries/charcters";
import "./CharacterList.css";

const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTES_LIST);

  if (loading) return "Loading...";
  if (error) return "Something went wrong!";

  return (
    <div className="character_list">
      {data?.characters?.results.map((char) => (
        <div key={char.id}>
          <img src={char.image} alt="" />
          <p>{char.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
