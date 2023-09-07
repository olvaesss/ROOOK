import { Colors } from "./Colors";
import { Desk } from "./Desk";
import { figure } from "./figures/figures";

export class Tile{
    readonly x:number;
    readonly y:number;
    readonly color:Colors;
    figure:figure|null;
    desk:Desk;
    available:boolean;
    id:number

    constructor(desk:Desk, x:number, y:number, color:Colors, figure:figure|null){
        this.x=x;
        this.y=y;
        this.color= color;
        this.figure=figure;
        this.desk=desk;
        this.available=false;
        this.id=Math.random()

    }
}