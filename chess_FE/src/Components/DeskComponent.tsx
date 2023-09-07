import React, { FC } from "react";
import { Desk } from "../models/Desk";
import TileComponent from "./TileComponent";
import { Tile } from "../models/Tile";
interface DeskProps{
    desk: Desk;
    setDesk:(desk :Desk)=>void;
}
 const DeskComponent:FC<DeskProps> =({desk, setDesk})=>{
    return (
        <div className="Desk">
            {desk.tiles.map((row, index)=>
            <React.Fragment key={index}>
                {row.map(tile=>
                    <TileComponent
                    />)}
            </React.Fragment>
            )}
        </div>
    ) 
}

export default DeskComponent