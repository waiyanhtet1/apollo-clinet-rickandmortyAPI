import useCharacters from "../../hooks/useCharacters";
import "./CharacterList.css";

const CharactersList = () => {
  const { loading, error, data } = useCharacters();

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
