import React from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllGames, searchQueryGames } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import Order from "../Order/Order";
import GameCard from "./GameCard/GameCard";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import Pagination from "./Pagination";


function Home() {
  const dispatch = useDispatch();
  const getGames = useSelector((state) => state.getGames);
  const searchGames = useSelector((state) => state.searchGames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const filterGames = useSelector((state) => state.filterGames);
  const  games  = useSelector((state) => state.getGames);

  const [name, setName] = useState("");
  const [search, setSearch] = useState(false);
  let allGames;

  async function searchGame(name) {
    await dispatch(searchQueryGames(name));
  }

  useEffect(() => {
    if (search) {
      searchGame(name);
    } else {
      dispatch(getAllGames());
    }
  }, [search]); //array de dependencia, con cada cambio del search se ejecuta

  filterBy === "Filter By" && orderBy === "Order By"
    ? (allGames = games.slice())
    : (allGames = filterGames.slice());

  //console.log(searchGames);
  return (
    <div classname="stylehome">
      <SearchBar setSearch={setSearch} setName={setName}></SearchBar>

      <ul>
      <h2>Look for your favourite videogame</h2>
      <Order></Order>
      {
      search ? (
        searchGames.map((game) => {
          <li key={game.id}>
            <Link to={`/gameDetail/${searchGames.id}`}>
              {/* <button onClick = {() => setSearch(name)}>Search</button> */}
              <GameCard  game={searchGames} key={searchGames.id} />
            </Link>
          </li>;
        })
      ) : (getGames.length > 0 ? <Pagination></Pagination> : <h1>Loading ...</h1>)
      }
      </ul>
    </div>
  );
}

export default Home;
