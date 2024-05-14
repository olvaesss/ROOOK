import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GameService } from "./game.service";
import { GameController } from "./game.contoller";

@Module({
    imports:[],
    controllers:[GameController],
    providers:[GameService, PrismaService]
})
export class GameModule{}