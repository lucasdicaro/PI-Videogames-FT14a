
import React, { Fragment } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import InputSearch from './InputSearch.css';
import { searchQueryGames } from '../../Redux/Actions/actions';
//import Card from '../5-Card/GameCard'


export function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    // const myVideogames = useSelector(dataStore => dataStore.searchGames)
    // console.log(myVideogames)
    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
    };
    
    const handleClick = (e) => { // Resolver click (el evento)
        e.preventDefault();
        dispatch(searchQueryGames(name))
    };
    const myVideogames = useSelector(dataStore => dataStore.searchGames)

    return (
        <div>
        <form>
            <input type="search" placeholder="Insert a name" 
            onChange={(e) => handleInputChange(e)}></input>
            <button type="submit" value="Buscar"
            onClick={(e) => handleClick(e)}> Buscar </button>
        </form>
        </div>
    )
};


export default Search;
/* 
 const SearchBar = (props) => {
  const handleInputChange = (e) => {
      e.preventDefault()
      props.setName(e.target.value) 
  }
  
  const onClickHandler = (e) => {
      e.preventDefault() 
      props.setSearch(true) //cuando cliqueo en search me lo cambia a true 
  }

  return (
      <form >
      <label >Search Videogames</label>
      <input
          type="text"            
          placeholder="Search Videogame"           

          onChange={(e) => {handleInputChange(e)}}  
          />
      <button onClick={(e) => {onClickHandler(e)}} type="submit">Search</button>
  </form>
)
};

export default SearchBar;   */