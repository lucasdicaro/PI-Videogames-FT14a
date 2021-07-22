import {
  GET_ALL_VIDEOGAMES,
  SEARCH_GAMES,
  GET_GENRE,
  GET_GAME_ID,
  ADD_NEW_GAME,
  FILTER, 
  FILTER_MINE,
  

} from '../constants';

import axios from 'axios';

//Obteniendo todos los juegos.
export const getAllGames = () => async (dispatch) => {
 try {
     const res = await axios.get("http://localhost:3001/videogames");
     dispatch({
         type: GET_ALL_VIDEOGAMES,
         payload: res.data
     });
 } catch (err) {
     console.log(err)
 }
}

//Buscar juegos por query.
export const searchQueryGames = (name) => async (dispatch) => {
  try {
      const res = await axios.get(`http://localhost:3001/videogames?name=${name}`);
       dispatch({
          type: SEARCH_GAMES,
          payload: res.data
      });
  } catch (err) {
      console.log(err)
  }
}

//Obteniendo juegos por género.
export const getGenre = () => async (dispatch) => {
  try {
      const res = await axios.get("http://localhost:3001/genres");
      dispatch({
          type: GET_GENRE,
          payload: res.data
      });
  } catch (err) {
      console.log(err)
  }
}

//Obteniendo juegos por ID.
export const getGamesById = (id) => async (dispatch) => {
  try {
      const res = await axios.get(`http://localhost:3001/videogame/${id}`);
      dispatch({
          type: GET_GAME_ID,
          payload: res.data
      });
  } catch (err) {
    console.log(err)
  }
}

// ORDENAMIENTO ASCENDENTE Y DESCENDENTE RATING Y NAME
export const orderBy = (sort) => (dispatch) => {  
  //console.log(sort)    
  dispatch({
      type: sort,        
    })    
};
export const filterBy = (filter) => (dispatch) => {  
    //console.log('QUE ESTAMOS BUSCANDO: ',filter, typeof(filter))    
    dispatch({
        type: FILTER, 
        payload: filter       
      })    
  };

  export const filterMine = (filter) => (dispatch) => {  
    /* console.log('QUE ESTAMOS BUSCANDO: ',filter)    */ 
    dispatch({
        type: FILTER_MINE, 
        payload: filter       
      })    
  };

 

/* 
export const filterBy = (filter) => (dispatch) => {  
    dispatch({
        type: FILTER, 
        payload: filter       
      })    
  }; */
  


//Creando un nuevo juego.
export const postGame = (game) => async (dispatch) => {
  try {
      const res = await axios.post("http://localhost:3001/videogame", game);
      console.log(game);
      dispatch({
          type: ADD_NEW_GAME,
          payload: res.data
      });
  } catch (err) {
      console.log(err)
  }
}



//Limpiando el delay del game.
export function clearGame() {
   return {
       type: GET_GAME_ID,
       payload: undefined
   }
}


