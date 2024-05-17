import { Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";

@Controller('game')
export class GameController{
    constructor(private gameService:GameService){

    }

    @Get()
    async GetGameMode(){
        return await this.gameService.GetGameMods();
    }

    @Post()
    async CreateRoom(){
        return await this.gameService.CreateRoom()
    }
}