import Axios from "axios";
import React, { useEffect, useState } from 'react'
import Game from "./Game";


function GameList() {
    
    const [games, setGames] = useState ([]);
    
    useEffect (() => {
        Axios.get("https://apis.wilders.dev/wild-games/games/").then(gamelist => {
            setGames(gamelist.data)
        })
    }) 
    
    return (
        <div className="GameList">
            {games.map((game) => (
                <div key={game.id}>
                    <Game game={game}/>
                </div>
            ))}
        </div>
    )
}

export default GameList

