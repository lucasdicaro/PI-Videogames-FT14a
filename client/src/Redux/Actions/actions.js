import {
    GET_ALL_VIDEOGAMES,
    SEARCH_GAMES,
    GET_GENRE,
    GET_GAME_ID,
    ORDER_ASC_NAME,
    ORDER_ASC_RATING,
    ORDER_DESC_NAME,
    ORDER_DESC_RATING,
    ADD_NEW_GAME

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
export const orderBy = (sort) => (dispatch, getState) => {
    const orderBy = getState().orderBy.slice();
    const games = getState().getGames.slice();
    const filterGames = getState().filterGames.slice();
  
    if (orderBy === "Order By") {
      if (sort === "highest") {
        const gamesOrder = games.sort((a, b) => a.rating - b.rating);
        dispatch({
          type: ORDER_ASC_RATING,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
      if (sort === "az") {
        const gamesOrder = games.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_ASC_NAME,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
    } else {
      if (sort === "highest") {
        const gamesOrder = filterGames.sort((a, b) => a.rating - b.rating);
        dispatch({
          type: ORDER_ASC_RATING,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
      if (sort === "az") {
        const gamesOrder = filterGames.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_ASC_NAME,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
    }
  };
  
  export const orderByDesc = (sort) => (dispatch, getState) => {
    const orderBy = getState().orderBy.slice();
    const games = getState().getGames;
    const filterGames = getState().filterGames;
  
    if (orderBy === "Order By") {
      if (sort === "lowest") {
        const gamesOrder = games.sort((a, b) => b.rating - a.rating);
        dispatch({
          type: ORDER_DESC_RATING,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
      if (sort === "za") {
        const gamesOrder = games.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_DESC_NAME,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
    } else {
      if (sort === "lowest") {
        const gamesOrder = filterGames.sort((a, b) => b.rating - a.rating);
        dispatch({
          type: ORDER_DESC_RATING,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
      if (sort === "za") {
        const gamesOrder = filterGames.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_DESC_NAME,
          payload: {
            gamesOrder,
            name: sort,
          },
        });
      }
    }
  };


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


