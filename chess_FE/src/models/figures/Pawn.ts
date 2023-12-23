import {Figure, FigureNames} from "./figures";
import {Colors} from "../Colors";
import {Tile} from "../Tile";
import blackLogo from '../../assets/figures/cheq/bP.png'
import whiteLogo from '../../assets/figures/cheq/wP.png'

export class Pawn extends Figure {

  isFirstStep: boolean = true;

  constructor(color: Colors, tile: Tile) {
    super(color, tile);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Tile): boolean {
    if(!super.canMove(target))
      return false;
    const direction = this.tile.figure?.color === Colors.BLACK ? 1 : -1
    const firstStepDirection = this.tile.figure?.color === Colors.BLACK ? 2 : -2

    if ((target.y === this.tile.y + direction || this.isFirstStep
        && (target.y === this.tile.y + firstStepDirection))
      && target.x === this.tile.x
      && this.tile.desk.getTile(target.x, target.y).isEmpty()) {
      return true;
    }

    if(target.y === this.tile.y + direction
    && (target.x === this.tile.x + 1 || target.x === this.tile.x - 1)
    && this.tile.isEnemy(target)) {
      return true;
    }

    return false;
  }

  moveFigure(target: Tile) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
