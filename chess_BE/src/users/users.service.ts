import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';
import { LoginDTO } from './dto/LoginDTO';


@Injectable()
export class UsersService {
    constructor( private Prisma:PrismaService){}

    async getUserData(id:string){//Получение данных пользователя
        try {
            const ID = Number(id)
            const USER = await this.Prisma.getUserById(ID)
            const Matches = await this.Prisma.getMatches(USER.USERNAME)
            console.log(Matches)
            return {USER, Matches}
        } catch (error) {
            console.log(error)
            return null
        }
    }


    async Register(data:Player){//регестр сервиc
        console.log(data)
        try {
            let USER = await this.Prisma.getUserByEmail(data.EMAIL)
            if(USER) return false
            await this.Prisma.createUser(data)
            USER = await this.Prisma.getUserByEmail(data.EMAIL)
            // const TOKENS = await this.AuthService.GiveTokens(data)
            return {USER}
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async Login(data:LoginDTO){//логин сервис
        try {
            // this.AuthService.CheckTokens()
            const USER = await this.Prisma.getUserByEmail(data.EMAIL)
            if(!USER) return null
            if(USER.PASSWORD == data.PASSWORD)return USER
        } catch (err) {
            console.log(err)
            return null
        }        
    }
}
