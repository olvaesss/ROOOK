import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LearnService{
    constructor(private prisma:PrismaService){
        
    }

    async getById(data:string){
        const learn = await this.prisma.getLearnById(Number(data))
        return learn
    }
}