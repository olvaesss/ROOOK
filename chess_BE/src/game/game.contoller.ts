import { Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";
import { GameGateway } from "./game.gateway";
import { Socket } from "net";

@Controller('game')
export class GameController{
    constructor(private gameService:GameService, private WebSocket:GameGateway){

    }

    @Get()
    async GetGameMode(){
        return await this.gameService.GetGameMods();
    }

    @Post()
    async CreateRoom(){
        return this.WebSocket.handleConnection()
    }
}