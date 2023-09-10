import React, { FC } from "react";
import { Tile } from "../models/Tile";

interface TileProps {
    tile: Tile,
    selected:boolean;
    click:(tile:Tile)=>void

}

const TileComponent:FC<TileProps>=({tile, selected, click})=>{
    return (
        <div className={['Tile', tile.color, selected ? 'selected' :''].join(' ')}
        onClick = {()=>click(tile)}
        style={{background: tile.available && tile.figure ? 'rgb(208, 119, 119)' : ''}}
        >
        {tile.available && !tile.figure && <div className={"available"}/>}
        {tile.figure?.logo && <img src={tile.figure.logo} alt=""/>}
        </div>
    )
}

export default TileComponent