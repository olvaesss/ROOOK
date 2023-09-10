import {Figure, FigureNames} from "./figures";
import {Colors} from "../Colors";
import {Tile} from "../Tile";
import blackLogo from '../../assets/figures/cheq/bQ.png'
import whiteLogo from '../../assets/figures/cheq/wQ.png'

export class Queen extends Figure {
  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Tile): boolean {
    if(!super.canMove(target))
      return false;
    if(this.tile.isEmptyVertical(target))
      return true;
    if(this.tile.isEmptyHorizontal(target))
      return true;
    if(this.tile.isEmptyDiagonal(target))
      return true;
    return false
  }
}
