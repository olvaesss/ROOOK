import React, { FC, useEffect, useState } from "react";
import { Desk } from "../models/Desk";
import TileComponent from "./TileComponent";
import { Tile } from "../models/Tile";
interface DeskProps{
    desk: Desk;
    setDesk:(desk :Desk)=>void;
}
 const DeskComponent:FC<DeskProps> =({desk, setDesk})=>{

    const [selectedTile, setSelectedTile] = useState<Tile | null>(null)

    function click(tile:Tile){
        if(selectedTile && selectedTile !== tile && selectedTile.figure?.canMove(tile)){
            selectedTile.moveFigure(tile);
            setSelectedTile(null);
        }else{
            setSelectedTile(tile)
        }
    }

    useEffect(()=>{
    highLightTiles()
    }, [selectedTile])

    function highLightTiles(){
        desk.highlightTiles(selectedTile)
        updateDesk()
    }

    function updateDesk(){
        const newDesk = desk.getCopyDesk();
        setDesk(newDesk)
    }
    return (
        <div className="Desk">
            {desk.tiles.map((row, index)=>
            <React.Fragment >
                {row.map(tile=>
                    <TileComponent
                    click={click}
                    tile = {tile}
                    key = {tile.id}
                    selected={tile.x === selectedTile?.x && tile.y === selectedTile?.y}
                    />)}
            </React.Fragment>
            )}
        </div>
    ) 
}

export default DeskComponent