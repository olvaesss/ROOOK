import { Colors } from "./Colors";
import { Tile } from "./Tile";

export class Desk {

    tiles:Tile[][]=[]

    public InitTiles(){
        for(let i =0;i<8;i++){
            const row:Tile[]=[]
            for(let j=0;j<8;j++){
                if((i+j)%2!==0){
                    row.push(new Tile(this, j,i, Colors.BLACK, null))//black
                }
                else{
                    row.push(new Tile(this, j,i, Colors.WHITE, null))//white
                }
            }
        }
    }
}