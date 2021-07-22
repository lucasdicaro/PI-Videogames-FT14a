import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getGenre, getAllGames, searchQueryGames} from '../../Redux/Actions/actions';
import { Link } from 'react-router-dom';

import Order from '../Order/Order'
import GameCard from "./GameCard/GameCard";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from 'react';
import Pagination from '../Home/Pagination';
import Filter from '../Filter/Filter';

function Home() {

  const dispatch = useDispatch();
  const getGames = useSelector((state) => state.getGames);
  const searchGames = useSelector((state) => state.searchGames);
   
  
  const [name, setName] = useState("");
  const [search, setSearch] = useState(false);
  //const [displayResults, setDisplayResults] = useState(getPokes)
  let allGames;
  
  async function searchVideogame(name) {
    await dispatch(searchQueryGames(name))        
  }

  useEffect(() =>{ 
      dispatch(getGenre()) 
      dispatch(getAllGames());
  
  },[]) 
  
  useEffect(() =>{ 
    if(searchGames[0])
    setSearch(true)
},[searchGames]) 

let sliced = searchGames[0] ? searchGames : getGames
  console.log('EZEEEEEEEEEE', search)
  console.log('EZEEEEEEEEEEGAAAAMEEEES', searchGames)
  return(

  <div className='Home' >
    <SearchBar setSearch={setSearch} setName={setName} ></SearchBar>   
    
    <ul>
    <h2>Look for your favourite Videogame</h2>
    <Order ></Order>
    <Filter ></Filter>
      { 
       /*  search ? 
        searchGames.map(game => { 
          <div>
           <Link to={`/gameDetail/${game.id}`} >          
            <GameCard game = {game} key = {game.id}  />        
          </Link> 
        </div>
        })
        :     */  
        (sliced.length > 0 ? <Pagination></Pagination> : <h1>Loading ...</h1>)
      }
    </ul> 
  </div>
  )
}

export default Home;