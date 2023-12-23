import {Figure, FigureNames} from "./figures";
import {Colors} from "../Colors";
import {Tile} from "../Tile";
import blackLogo from '../../assets/figures/cheq/bR.png'
import whiteLogo from '../../assets/figures/cheq/wR.png'

export class Rook extends Figure {
  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Tile): boolean {
    if(!super.canMove(target))
      return false;
    if(this.tile.isEmptyVertical(target))
      return true
    if(this.tile.isEmptyHorizontal(target))
      return true
    return false
  }
}
