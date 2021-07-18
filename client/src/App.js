import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing'
//import Details from './components/Details/Details'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
//import SearchBar from './components/SearchBar/SearchBar'
import AddGame from './components/AddGame/AddGame'
import Details from './components/Details/Details'

function App() {
  return (
    <React.Fragment>
     <Route path="/home" component={NavBar}></Route>
      <Route path="/addGame" component={NavBar}></Route>
      {/* <Route exact path="/gameDetail/:id" render={({ match }) => <Details id={match.params.id} />} /> */}
     {  <Route path="/gameDetail/:id" component={Details}></Route> }
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home}></Route>
      <Route exact path="/addGame" component={AddGame}></Route>
    </React.Fragment>
  );
}

export default App;
