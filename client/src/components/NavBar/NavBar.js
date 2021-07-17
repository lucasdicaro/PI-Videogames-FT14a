import React from "react";
import gggg from "../../img/gggg.png";
// import SearchBar from "../SearchBar/SearchBar";
import './NavBar.css';
// import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
     <img className = "img" src ={gggg} alt = "img not found" />
     <a href="/home" className ="Home"><h2>Home</h2></a>
     <div className="Navbar">
            <div className="leftSide">
              <div className="links">
            <a href="/addGame" className ="addGame"><h2>Add Game</h2></a>
                </div>  
            </div>
     {/* <SearchBar onChange = {onChange} /> */}
    </div>
    </div>
  );
}

export default Navbar;
