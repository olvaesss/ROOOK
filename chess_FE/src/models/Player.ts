import { Colors } from "./Colors";

export class Player{
    color:Colors;
    constructor(color:Colors.BLACK|Colors.WHITE){
        this.color = color
    }
}