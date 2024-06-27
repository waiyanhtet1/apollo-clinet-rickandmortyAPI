import { useParams } from "react-router-dom";
import useCharacterInfo from "../../hooks/useCharacterInfo";
import "./CharacterInfo.css";

const CharacterInfo = () => {
  const { id } = useParams();
  const { loading, error, data } = useCharacterInfo(id);

  const res = data?.character;

  if (loading) return "Loading...";
  if (error) return "Something went wrong!";

  return (
    <div className="info-container">
      <div className="info-profile">
        <img src={res?.image} alt="" width={200} height={200} />
        <div className="info-profile-detail">
          <ul>
            <li>{res?.name}</li>
            <li>{res?.species}</li>
            <li>{res?.status}</li>
            <li>{res?.gender}</li>
          </ul>
          <div className="info-origin">
            <p>{res?.origin.name}</p>
            <p>{res?.origin.type}</p>
            <p>{res?.origin.dimension}</p>
          </div>
        </div>
      </div>
      <div className="info-episodes">
        <h4>Episodes</h4>
        {res?.episode.map((epi) => (
          <li key={epi.id}>
            {epi.name} - {epi.episode}
          </li>
        ))}
      </div>
    </div>
  );
};

export default CharacterInfo;
