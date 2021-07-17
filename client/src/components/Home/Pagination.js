 import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard/GameCard';
import  './Pagination.css';

export default function Pagination() {
  let dataLimit = 15;
  const getGames = useSelector((state) => state.getGames);
  const [pages] = useState(Math.round(getGames.length / dataLimit));

  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
      setCurrentPage((pages) => pages + 1)
  }

  function goToPreviousPage() {
      setCurrentPage((pages) => pages - 1)
  }

  const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit
      const endIndex = startIndex + dataLimit
      return getGames.slice(startIndex, endIndex)
  };        
  
   return (
    <div>
        <div >
          <button className={`${currentPage === 1 ? 'disabled' : ''}`} onClick={goToPreviousPage} >Prev</button> 
          <h5 >Pag: {currentPage}</h5> 
          <button className={`${currentPage === pages ? 'disabled' : ''}`} onClick={goToNextPage} >Next</button>
        </div>

    {
        getPaginatedData().map(game => (   
        <ul key = {game.id}> 
          <Link  to = {`/gameDetail/${game.id}`}>          
            <GameCard game = {game} key = {game.id}/>
          </Link>
        </ul>))}        
      </div>
  ) 
}