import React, { FC } from "react";
import { Tile } from "../models/Tile";

interface TileProps {
    tile: Tile,

}

const TileComponent:FC<TileProps>=({tile})=>{
    return (
        <div className={['Tile', tile.color].join(' ')}
        >
        </div>
    )
}

export default TileComponent