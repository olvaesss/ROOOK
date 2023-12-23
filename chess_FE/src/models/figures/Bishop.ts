import {Figure, FigureNames} from "./figures";
import {Colors} from "../Colors";
import {Tile} from "../Tile";
import blackLogo from '../../assets/figures/cheq/bB.png'
import whiteLogo from '../../assets/figures/cheq/wB.png'


export class Bishop extends Figure {

  constructor(color: Colors, cell: Tile) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Tile): boolean {
    if(!super.canMove(target))
      return false;
    if(this.tile.isEmptyDiagonal(target))
      return true
    return false
  }
}
