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

    const [rate, setRate] = useState (0)

    function rating() {
        setRate(rate == 0 ? 4.2 : 0)
}
    return (
       <div>
        <button onClick = {rating}>Les mieux notés</button>

        <div className="GameList">
                {games.filter(g => g.rating >= rate).map((game) => (
                    <div key={game.id}>
                        <Game game={game}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameList

