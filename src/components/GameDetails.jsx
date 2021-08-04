import Axios from "axios"
import React, { useEffect, useState } from 'react'

function GameDetails(props) {

    const [gameDetail, setGameDetail] = useState (null);

    useEffect (() => {
        Axios.get("https://apis.wilders.dev/wild-games/games/").then(gameDetails => {
            const unique = gameDetails.data.find(g => g.id === parseInt(props.match.params.id))
            setGameDetail(unique)
        })
    },[]) 

let showGame = () => {
    return (<div>
        {gameDetail.name}
        {gameDetail.genres.map(g => <span>{g.name}</span>)}
        <video src={gameDetail.clip.clips["640"]} controls/>
    </div>)
}

    return (
        <div>
            {gameDetail?showGame():null}
        </div>
    )
}

export default GameDetails
