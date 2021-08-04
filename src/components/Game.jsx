import React from 'react'

function Game({game}) {
    return (
        <div>
            {game.name}
            {game.rating}
            <img src = {game.background_image} alt="image"/>
        </div>
    )
}

export default Game
