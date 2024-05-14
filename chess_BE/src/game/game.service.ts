import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GameService{
    constructor(private prismaService:PrismaService){

    }

    async GetGameMods(){
        return await this.prismaService.GetMods()
    }
}