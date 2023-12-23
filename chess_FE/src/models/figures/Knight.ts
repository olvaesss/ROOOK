import {Figure, FigureNames} from "./figures";
import {Colors} from "../Colors";
import {Tile} from "../Tile";
import blackLogo from '../../assets/figures/cheq/bN.png'
import whiteLogo from '../../assets/figures/cheq/wN.png'

export class Knight extends Figure {
  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: Tile): boolean {
    if(!super.canMove(target))
      return false;
    const dx = Math.abs(this.tile.x - target.x);
    const dy = Math.abs(this.tile.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
