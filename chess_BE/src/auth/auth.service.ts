import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Tokens from './dto/tokensDTO';



@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
      ) {}

    async GiveTokens(User:any){
        const REFRESH = await this.jwtService.signAsync({Email:User.Email},{expiresIn:'30d'})//Функции на получение токенов при первом заходе
        const ACCESS = await this.jwtService.signAsync({Email:User.Email},{expiresIn:'24h'})
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