import {Figure, FigureNames} from "./figures";
import {Colors} from "../Colors";
import {Tile} from "../Tile";
import blackLogo from '../../assets/figures/cheq/bK.png'
import whiteLogo from '../../assets/figures/cheq/wK.png'

export class King extends Figure {
  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
    this.underAttack= false
  }
  underAttack:true|false

  canMove(target: Tile): boolean {
    if(!super.canMove(target)){
      return false
    }
    if(this.tile.KingsMovesVert(target)){
      return true
    }
    if(this.tile.KingsMovesHoriz(target)){
      return true
    }
    if(this.tile.KingsMovesDiag(target)){
      return true
    }
    else{
      return false
    }
  }
}
