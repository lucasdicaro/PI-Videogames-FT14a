import React from "react";
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
 import { useEffect } from "react";
import { getAllGames, searchQueryGames } from '../../Redux/Actions/actions';
import {Link} from 'react-router-dom';
import GameCard from "./GameCard/GameCard";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from 'react';


function Home() {
  const dispatch = useDispatch();
  const getGames = useSelector((state) => state.getGames)
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() =>{
    if(search) {
      console.log('ENTRE', search);
      dispatch(searchQueryGames(search))
    } else {
      dispatch(getAllGames());
    }
},[search])
  
  return (
    <div>
    <SearchBar onChange = {(value) => setName(value) }/>
    <button onClick = {() => setSearch(name)}>Search</button>
      <ul>
      <h2>List of videogames</h2>
      {
                getGames.length > 0 ? getGames.map(game => (   
                <li key = {game.id}> 
                <Link to = {`/details/${game.id}`}><GameCard game = {game} key = {game.id}/></Link>
                </li>
                )): <h1>Loading ...</h1>
              }
              </ul>
    </div>
  )
}

export default Home;
