import React, { useEffect } from "react";
//import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenre,
  filterByGenres,
  filterBySource,
} from "../../Redux/Actions/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.getGenres);

  useEffect(() => {
    dispatch(getGenre());
  }, []);

  const handleFilter =  (e) => {
    if (e.target.value === "Api" || e.target.value === "Created") {
      dispatch(filterBySource(e.target.value));
    } else {
       dispatch(filterByGenres(e.target.value));
    }
  };

  return (
    <div className="filter">
      <select onChange={handleFilter}>
        <option defaultValue>Filtrar por </option>
        <option value="Api">API</option>
        <option value="Created">Creado</option>
        {genres.map((g, id) => (
          <option key={id} value={g.name}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;/* import React from "react";
//import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterBy, filterMine } from "../../Redux/Actions/actions";

export default function Filter() {
    
    const dispatch = useDispatch()
    const getGenres = useSelector((state) => state.getGenres)    

    const onFilterChange = (e) => {   
        dispatch(filterBy(e.target.value));
      }  
    const onMineFilterChange = (e) => {   
      dispatch(filterMine(e.target.value));
    }    
    return (
        <div className="select">
          <label>DB or API: </label>
          <select name="slct" id="slct" onChange={onMineFilterChange}>
            <option defaultValue value="null">... </option>
            <option value='dB'>dB</option>
            <option value='API'>API</option>                       
          </select>
          
          <label>Filter by: </label>
          <select name="slct" id="slct" onChange={onFilterChange}>
            <option defaultValue value="null">... </option>
            {
                getGenres.length > 0 ? getGenres.map(e => <option value={e.name}>{e.name}</option>) : ''
            }            
          </select>
        </div>
      );

}; */


/* import React from "react";
//import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterBy } from "../../Redux/Actions/actions";

export default function Filter() {
    
    const dispatch = useDispatch()
    const getGenres = useSelector((state) => state.getGenres)

    const onFilterChange = (e) => {   
        dispatch(filterBy(e.target.value));
      }  

    return (
        <div className="select">
          <label>Filter: </label>
          <select name="slct" id="slct" onChange={onFilterChange}>
            <option defaultValue value="null">... </option>
            {
                getGenres.length > 0 ? getGenres.map(e => <option value={e.name}>{e.name}</option>) : ''
            }
            
          </select>
        </div>
      );

}; */