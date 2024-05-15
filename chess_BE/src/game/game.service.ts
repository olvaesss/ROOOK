import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GameService{
    constructor(private prismaService:PrismaService){

    }

    async GetGameMods(){
        return await this.prismaService.GetMods()
    }

    async CreateRoom(){
        const roomID = randomUUID()
        return {roomID:roomID}
    }
}