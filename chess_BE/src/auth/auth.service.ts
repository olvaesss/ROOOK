import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Tokens from './dto/tokensDTO';
import { Player } from '@prisma/client';



@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
      ) {}

    async GiveTokens(Player:Player){
        const REFRESH = await this.jwtService.signAsync({Email:Player.EMAIL,Name:Player.USERNAME},{expiresIn:'30d'})//Функции на получение токенов при первом заходе
        const ACCESS = await this.jwtService.signAsync({Email:Player.EMAIL,Name:Player.USERNAME, Password:Player.PASSWORD},{expiresIn:'24h'})
        console.log(REFRESH, ACCESS)
        return {
            access:ACCESS,
            refresh:REFRESH
        }
    }

    async CheckTokens(data:Tokens){
        await this.jwtService.verifyAsync(data.refresh)
        await this.jwtService.verifyAsync(data.access)
    }
}