import {
  GET_ALL_VIDEOGAMES,
  ADD_NEW_GAME,
  SEARCH_GAMES,
  GET_GENRE,
  GET_GAME_ID,
  az,
  za,
  ASC,
  DESC,
  FILTER,
  FILTER_MINE,
 
} from "../constants";

const initialState = {
  originalGames: [],
  getGames: [], 
  addGame: {}, 
  searchGames: [],
  getGenres: [], 
  getDetails: {},
  filterGames: []
  
};

console.log(initialState.searchGames)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        getGames: action.payload,
        originalGames: action.payload
      };

    case ADD_NEW_GAME:
      return {
        ...state,
        addGame: action.payload,
      };

    case SEARCH_GAMES:
      return {
        ...state,
       searchGames: action.payload,
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
      case az:      
      const res = state.getGames.sort((a, b) => {
        const game1 = a.name.toUpperCase();
        const game2 = b.name.toUpperCase();
        if(game1 < game2) {
          return -1
        }
        if(game1 > game2) {
          return 1
        } else {
          return 0
        }
      })      
      
      return {
        ...state,        
        getGames: [...res],
      };

    case ASC:
     const res3 = state.getGames.sort((a, b) =>  a.rating - b.rating);     
      return {
        ...state,        
        getGames: [...res3],
      };
    case za:
      const res2 = state.getGames.sort((a, b) => {
        const game1 = a.name.toUpperCase();
        const game2 = b.name.toUpperCase();
        if(game1 > game2) {
          return -1
        }
        if(game1 < game2) {
          return 1
        } else {
          return 0
        }
      })      
      return {
        ...state,        
        getGames: [...res2],
      };
    case DESC:
      const res4 = state.getGames.sort((a, b) =>  b.rating - a.rating);     
      return {
        ...state,        
        getGames: [...res4],
      };

      case FILTER:
        if(action.payload === 'null') {
          return {
            ...state,
            getGames: state.originalGames
          } 
        };      
      const filter = state.originalGames.filter(game => {
       
        for(let i=0; i < game.genres.length; i++) {
          if(game.genres[i].name === action.payload)  {
            return true
          } 
        }
        return false
      } );      
      
      return {
        ...state,
       getGames: filter,
      };

      
      case FILTER_MINE: 
      if(action.payload === 'null') {
        return {
          ...state,
          getGames: state.originalGames
        } 
      };   
      let filterMine = []
      if(action.payload === 'dB') {
        filterMine = state.originalGames.filter(game => game.mine === true);
        
      } else {
        filterMine = state.originalGames.filter(game => game.mine === false);
      }
     /*  console.log('MIS HIJITOS: ',filterMine) */
      
      return {
        ...state,
       getGames: filterMine,
      }

     /*  case FILTER_RATING:
         filterRatind = state.getGames.filter(game => game.rating > 3);
         return {
           ...state,
           getGames:filterRatind
         } */

    /*  for(let i=0; i < state.getGames.length; i++){
        if(state.getGames[0].rating){
         
        }
     } */



 /*      case FILTER:
      if(action.payload === 'null') {
        return {
          ...state,
          getGames: state.originalGames
        }
      };
      state.originalGames = state.getGames;
      const filter = state.getGames.filter((game) => game.genres.includes(action.payload));
      console.log('FILTRAAAADOOOOO',action.payload)
      console.log(state.getGames)
      return {
        ...state,
         getGames: [...filter]  
      }; */
    default:
      return state;
  }
};

export default rootReducer;
