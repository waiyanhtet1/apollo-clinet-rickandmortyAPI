import { Link } from "react-router-dom";
import useCharacters from "../../hooks/useCharacters";
import "./CharacterList.css";

const CharactersList = () => {
  const { loading, error, data } = useCharacters();

  if (loading) return "Loading...";
  if (error) return "Something went wrong!";

  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/search">
        <button>Search Character Locations</button>
      </Link>
      <div className="character_list">
        {data?.characters?.results.map((char) => (
          <Link to={`/${char.id}`} key={char.id}>
            <div>
              <img src={char.image} alt="" />
              <p className="character-title">{char.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
