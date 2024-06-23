import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AdminService{
    constructor(private prisma:PrismaService){}

    async getUsers(){
        const data = await this.prisma.getUsers()
        return data
    }

    async getNewsRequests(){
        const data = await this.prisma.getNewsRequests()
        return data
    }

    async deleteUser(data:number){
        try {
            await this.prisma.deleteUser(data)
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async ApproveNews(data:number){
        try {
            await this.prisma.ApproveNews(data)
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async reject(id:number){
        try {
            await this.prisma.Reject(id)
        } catch (err) {
            console.log(err)
            return false
        }
    }
}