import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LearnService{
    constructor(private prisma:PrismaService){
        
    }

    async getById(data:string){
        const title = await this.prisma
        const text = ''
        const video = ''
        const images = []
        return {data,text, title, video, images}
    }
}