import React from 'react'
import './GameCard.css';

function GameCard({game}) {
    return (
        <div className = "card-container">
            <h1>{game.name}</h1>
            <img className = "img-card"src= {game.image} alt = "img not found"/>
            <h4>Genres:</h4> 
            {
                game.genres && game.genres.map((el,i) => {
                    return <li key={i}>{el.name}</li>
                } )
            }
        </div>
    )
}

export default GameCard;
