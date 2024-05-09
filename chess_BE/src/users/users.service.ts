import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';


@Injectable()
export class UsersService {
    constructor( private Prisma:PrismaService, private AuthService:AuthService){}

    async getUserData(data:any){
        const USER = await this.Prisma.getUser(data.EMAIL)
        return {USER}
    }

    async Register(data:Player){//регестр сервиc
        console.log(data)
        try {
            const USER = await this.Prisma.getUser(data.EMAIL)
            if(USER) return false
            await this.Prisma.createUser(data)
            const TOKENS = await this.AuthService.GiveTokens(data)
            return {data, TOKENS}
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async Login(data:Player){//логин сервис
        try {
            const USER = await this.Prisma.getUser(data.EMAIL)
            if(!USER) return null
            if(USER.PASSWORD == data.PASSWORD)return true
        } catch (err) {
            console.log(err)
            return null
        }        
    }
}
