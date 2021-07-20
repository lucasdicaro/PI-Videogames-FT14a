import React from 'react'
import './GameCard.css';

function GameCard({game}) {
    console.log(game)
    return (
        <div className = "card-container">
            <h2>{game.name}</h2>
            <img className = "img-cards"src= {game.background_image} alt = "img not found"/>
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
