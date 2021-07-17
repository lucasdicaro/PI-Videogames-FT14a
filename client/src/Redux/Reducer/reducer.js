import {
    GET_ALL_VIDEOGAMES,
    ADD_NEW_GAME,
    SEARCH_GAMES,
    GET_GENRE,
    GET_GAME_ID,
    ORDER_ASC_NAME,
    ORDER_ASC_RATING,
    ORDER_DESC_NAME,
    ORDER_DESC_RATING,
  } from "../constants";
  
  const initialState = {
    getGames: [], 
    addGame: {}, 
    searchGames: [],
    getGenres: [], 
    getDetails: [],
    filterGames: [],
    orderBy: "Order By",
    filterBy: "Filter By",
  };

  console.log(initialState.searchGames)
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_VIDEOGAMES:
        return {
          ...state,
          getGames: action.payload
        };
  
      case ADD_NEW_GAME:
        return {
          ...state,
          addGame: action.payload,
        };
  
      case SEARCH_GAMES:
        return {
          ...state,
         searchGames: action.payload
        };
        case ORDER_ASC_NAME:
          return {
            ...state,
            filterGames: action.payload.gamesOrder,
            orderBy: action.payload.name,
          };
        case ORDER_ASC_RATING:
          return {
            ...state,
            filterGames: action.payload.gamesOrder,
            orderBy: action.payload.name,
          };
        case ORDER_DESC_NAME:
          return {
            ...state,
            filterGames: action.payload.gamesOrder,
            orderBy: action.payload.name,
          };
        case ORDER_DESC_RATING:
          return {
            ...state,
            filterGames: action.payload.gamesOrder,
            orderBy: action.payload.name,
          };

      case GET_GENRE:
        return {
          ...state,
          getGenres: action.payload,
        };
      case GET_GAME_ID:
        return {
          ...state,
          getDetails: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  