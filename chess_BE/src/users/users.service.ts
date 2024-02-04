import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';


@Injectable()
export class UsersService {
    constructor( private Prisma:PrismaService){}

    async Register(data:Player){//регестр сервиc
        try {
            const USER = await this.Prisma.getUser(data.EMAIL)
            if(USER) return false
            await this.Prisma.createUser(data)
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
