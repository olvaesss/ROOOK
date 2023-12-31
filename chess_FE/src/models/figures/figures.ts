import { Colors } from "../Colors";
import { Tile } from "../Tile";
import logo from '../../assets/figures/cheq/bK.png' 
export enum FigureNames{
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure{
    color:Colors;
    logo: typeof logo | null | undefined;
    tile:Tile;
    name:FigureNames;
    id:number;
    underAttack:boolean

    constructor(color:Colors, tile:Tile){
        this.color=color;
        this.tile=tile;
        this.tile.figure=this;
        this.name = FigureNames.FIGURE
        this.id=Math.random()
        this.underAttack=false
        
    }
    canMove(target: Tile) : boolean {
        if(target.figure?.color === this.color)
          return false
        if(target.figure?.name === FigureNames.KING && target.figure?.color !==this.color){
          this.attackKing(target)
        }
        return true;
      }

      attackKing(target:Tile){
        if(target.figure){
        target.figure.underAttack = true
        console.log(target.color+" King under attack")
        }
      }
    
      moveFigure(target: Tile) {
    }
  }
