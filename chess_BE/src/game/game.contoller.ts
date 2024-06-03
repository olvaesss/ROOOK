import { Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";
import { GameGateway } from "./game.gateway";

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService, private readonly gameGateway: GameGateway) {}

  @Get()
  async GetGameMode() {
    return await this.gameService.GetGameMods();
  }

  @Post()
  async CreateRoom() {
    // You can't call handleConnection() directly from the controller
    // Instead, you can emit an event to the gateway to create a room
    this.gameGateway.server.emit('createRoom');
  }
}
