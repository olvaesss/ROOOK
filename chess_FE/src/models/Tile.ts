import { Colors } from "./Colors";
import { Desk } from "./Desk";
import { Figure } from "./figures/figures";

export class Tile{
    readonly x:number;
    readonly y:number;
    readonly color:Colors;
    figure:Figure|null;
    desk:Desk;
    available:boolean;
    id:number

    constructor(desk:Desk, x:number, y:number, color:Colors, figure:Figure|null){
        this.x=x;
        this.y=y;
        this.color= color;
        this.figure=figure;
        this.desk=desk;
        this.available=false;
        this.id=Math.random()

    }
    isEmpty(): boolean {
        return this.figure === null;
      }
    
      isEnemy(target: Tile): boolean {
        if (target.figure) {
          return this.figure?.color !== target.figure.color;
        }
        return false;
      }
    
      isEmptyVertical(target: Tile): boolean {
        if (this.x !== target.x) {
          return false;
        }
    
        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++) {
          if(!this.desk.getTile(this.x, y).isEmpty()) {
            return false
          }
        }
        return true;
      }
    
      isEmptyHorizontal(target: Tile): boolean {
        if (this.y !== target.y) {
          return false;
        }
    
        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++) {
          if(!this.desk.getTile(x, this.y).isEmpty()) {
            return false
          }
        }
        return true;
      }
    
      isEmptyDiagonal(target: Tile): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);
        if(absY !== absX)
          return false;
    
        const dy = this.y < target.y ? 1 : -1
        const dx = this.x < target.x ? 1 : -1
    
        for (let i = 1; i < absY; i++) {
          if(!this.desk.getTile(this.x + dx*i, this.y + dy   * i).isEmpty())
            return false;
        }
        return true;
      }
    
      setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.tile = this;
      }
    


      KingsMovesVert(target:Tile):boolean{
        if (this.x !== target.x) {
          return false;      
        }
        console.log(this.x,target.x)
        if(target.y==this.y+1||target.y==this.y-1){
          return true
        }else{
          return false
        }
      }
      KingsMovesHoriz(target: Tile): boolean {
        if (this.y !== target.y) {
          return false;
        }
        console.log(this.x,target.x)
        if(target.x==this.x+1||target.x==this.x-1){
          return true
        }else{
          return false
        }
      }
      KingsMovesDiag(target: Tile): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);
        if(absY !== absX)
          return false; 
          console.log(this.x,this.y)
          if(
          (target.x==this.x-1&&target.y==this.y+1)||
          (target.x==this.x+1&&target.y==this.y+1)||
          (target.x==this.x+1&&target.y==this.y-1)||
          (target.x==this.x-1&&target.y==this.y-1)
          ){
            return true
          }else{
            return false
          }
      }


      addLostFigure(figure: Figure) {
        figure.color === Colors.BLACK
          ? this.desk.lostBlackFigures.push(figure)
          : this.desk.lostWhiteFigures.push(figure)
      }
    
      moveFigure(target: Tile) {
        if(this.figure && this.figure?.canMove(target)) {
          this.figure.moveFigure(target)
          if (target.figure) {
            console.log(target.figure)
            this.addLostFigure(target.figure);
          }
          target.setFigure(this.figure);
          this.figure = null;
        }
      }
    }
