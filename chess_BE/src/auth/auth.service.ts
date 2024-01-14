import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
      ) {}

    async GiveTokens(User:any){//удивительно но это работает
        // const docRef= (await getDataCurrent('users', User.Email)).docRef
        const REFRESH = await this.jwtService.signAsync({Email:User.Email},{expiresIn:'30d'})//Функции на получение токенов при первом заходе
        const ACCESS = await this.jwtService.signAsync({Email:User.Email},{expiresIn:'24h'})
        console.log(REFRESH, ACCESS)
        // docRef.update({'REFRESH':REFRESH})
        return {
            access:ACCESS,
            refresh:REFRESH
        }
    }

}