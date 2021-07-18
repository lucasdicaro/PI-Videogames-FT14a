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
    if (id) {
      dispatch(getGamesById(id));
    }
    return () => {
      dispatch(clearGame());
    };
  }, [dispatch, id]);
  
  console.log(getDetails);
  return (
     <div>
      {/* {details === undefined && <h1>Cargando...</h1>} */}
      {getDetails ? (
         <div>
         <h4>Name:</h4>
         <span>{getDetails.name}</span>
         <img
           className="img-detail"
           src={getDetails.background_image}
           alt="img not found"
         ></img>
         <h4>Description:</h4>
          <span>{getDetails.description}</span> 
         <h4>Genre:</h4>
         {getDetails.genres &&
           getDetails.genres.map((el, i) => {
             return <li key={i}>{el.name}</li>
           })}
         <h4>Platforms:</h4>
         {
           getDetails.parent_platforms &&
             getDetails.parent_platforms.map((el, i) => <li key={i}>{el}</li>) //Averiguar porque no lo muestra!!
         }
         <h4>Released:</h4>
         <span>{getDetails.released}</span>
         <h4>Rating:</h4>
         <span>{getDetails.rating}</span>
       </div>
      ):(<h1>Cargando...</h1>)} 
       
      
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
