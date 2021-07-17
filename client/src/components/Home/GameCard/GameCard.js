import React from 'react'
import './GameCard.css';

function GameCard({game}) {
    return (
        <div className = "card-container">
            <h2>{game.name}</h2>
            <img className = "img-cards"src= {game.image} alt = "img not found"/>
            <h4>Genres:</h4> 
            {
                game.genres && game.genres.map((el,i) => {
                    return <li key={i}>{el}</li>
                } )
            }
        </div>
    )
}

export default GameCard;
