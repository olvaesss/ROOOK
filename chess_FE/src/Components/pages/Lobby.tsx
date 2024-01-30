import React from "react"
import Game from "../Game"

const Lobby = ()=>{
    return (
        <div className="Lobby">
            <div className="EnemyInfo">black</div>
            <Game/>
            <div className="PlayerInfo">white</div>
        </div>
    )
}

export default Lobby