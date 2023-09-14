import React, { useEffect, useState } from "react";
import DeskComponent from "./DeskComponent";
import { Desk } from "../models/Desk";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

export default function Main() {
    const [desk, setDesk] = useState(new Desk())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
    useEffect(()=>{
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function swapPlayer(){
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }
    function restart(){
        const newDesk = new Desk();
        newDesk.InitTiles()
        newDesk.addFigures()
        setDesk(newDesk)
    }

    return(
        <div className="Main">
            <DeskComponent
            desk={desk}
            setDesk={setDesk}
            currentPlayer = {currentPlayer}
            swaoPlayer = {swapPlayer}
            />
        </div>

    )
}

