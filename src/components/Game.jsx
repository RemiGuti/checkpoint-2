import React from 'react'

function Game({game}) {
    return (
        <div>
            {game.name}
            {game.rating}
            {game.background_image}
        </div>
    )
}

export default Game
