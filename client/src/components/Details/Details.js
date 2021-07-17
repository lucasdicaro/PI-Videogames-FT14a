import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearGame, getGamesById } from "../../Redux/Actions/actions";
//import './GameDetail.css';

function Details() {
  const dispatch = useDispatch();
  const getDetails = useSelector((state) => state.getDetails);
  const { id } = useParams();
  

  useEffect(() => {
    if (id.parseInt('', id)) {
      dispatch(getGamesById(id));
    }
    return () => {
      dispatch(clearGame());
    };
  }, [dispatch, id]);
  
  console.log(getDetails);
  return (
    <div>
      {getDetails === undefined && <h1>Cargando...</h1>}
      {getDetails.length > 0 && (
        <div>
          <h4>Name:</h4>
          <span>{getDetails[0].name}</span>
          <img
            className="img-detail"
            src={getDetails[0].image}
            alt="img not found"
          ></img>
          <h4>Description:</h4>
           <span>{getDetails[0].description}</span> 
          <h4>Genre:</h4>
          {getDetails[0].genres &&
            getDetails[0].genres.map((el, i) => {
              return <li key={i}>{el.name}</li>
            })}
          <h4>Platforms:</h4>
          {
            getDetails[0].platforms &&
              getDetails[0].platforms.map((el, i) => <li key={i}>{el.platform.name}</li>) //Averiguar porque no lo muestra!!
          }
          <h4>Release:</h4>
          <span>{getDetails[0].releaseDate}</span>
          <h4>Rating:</h4>
          <span>{getDetails[0].rating}</span>
        </div>
      )}
    </div>
  );
}

export default Details;

/*import GameCardDetail from "../GameCardDetail/GameCardDetail";
import getDetails from '../../Redux/Reducer/reducer'


function Details() {
  return (
    <div>
    <GameCardDetail game = {getDetails} />
    
    
    </div>
  )

}
export default Details;
*/
