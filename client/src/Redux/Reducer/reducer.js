import {
    GET_ALL_VIDEOGAMES,
    ADD_NEW_GAME,
    SEARCH_GAMES,
    GET_GENRE,
    GET_GAME_ID,
  } from "../Actions/actions";
  
  const initialState = {
    getGames: [], 
    addGame: {}, 
    searchGames: [],
    getGenres: [], 
    getDetails: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_VIDEOGAMES:
        return {
          ...state,
          getGames: action.payload,
        };
  
      case ADD_NEW_GAME:
        return {
          ...state,
          addGame: action.payload,
        };
  
      case SEARCH_GAMES:
        return {
          ...state,
          getGames: action.payload,
        };
  
      case GET_GENRE:
        return {
          ...state,
          getGenres: action.payload,
        };
      case GET_GAME_ID:
        return {
          ...state,
          getDetails: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  