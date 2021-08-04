import React from 'react'
import {Link} from "react-router-dom"

function Game({game}) {
    return (
        <div className="card">
            <Link to={"/games/"+game.id}>{game.name}</Link>
            {game.rating}
            <img className="img-game" src = {game.background_image} alt="image"/>
        </div>
    )
}

export default Game
