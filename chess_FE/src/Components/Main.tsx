import React, { useEffect, useState } from "react";
import DeskComponent from "./DeskComponent";
import { Desk } from "../models/Desk";

export default function Main() {
    const [desk, setDesk] = useState(new Desk())

    useEffect(()=>{
        restart()
    }, [])
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
            />
        </div>

    )
}

