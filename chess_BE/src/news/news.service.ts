import { Injectable } from "@nestjs/common";
import { News } from "@prisma/client";
import { randomUUID } from "crypto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class NewsService{
    constructor(private Prisma:PrismaService){

    }

    async GetAllNews(){
        const News = this.Prisma.getAllNews()
        return News
    }

    async getNews(data:number){
        const News = this.Prisma.getNews(data)
        return News
    }

    async addNews(data:any){
        try {
            data.ID_PLAYER=1
            await this.Prisma.addNews(data)
            return data
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async updateNews(data:News){
        try {
            await this.Prisma.updateNews(data)
            return data
        } catch (err) {
            console.log(err)
            return false
        }
    }
    
    async deleteNews(data:number){
        try {
            await this.Prisma.deleteNews(data)
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

}