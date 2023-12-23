import React from "react"
import Game from "../Game"

const Lobby = ()=>{
    return (
        <div className="Lobby">
            <div className="BlackPlayerInfo">black</div>
            <Game/>
            <div className="WhitePlayerInfo">white</div>
        </div>
    )
}

export default Lobby