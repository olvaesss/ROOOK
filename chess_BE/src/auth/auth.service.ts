import { Injectable } from '@nestjs/common';
import { getDataCurrent } from 'src/DataBase';
import { logindata, userdata} from 'src/users/dto/userdata';
import { REFRESH_TOKEN, ACCESS_TOKEN, TOKENS} from './auth.model';
import MD5 from './md5/md5';



@Injectable()
export class AuthService {

    async GiveTokens(User:userdata){
        const docRef= (await getDataCurrent('users', User.Email)).docRef
        const REFRESH = await this.GiveRefreshToken(User.Email, User.Password)
        const ACCESS = await this.GiveAccessToken(User.Email, User.Password)
        console.log(REFRESH, ACCESS)
        TOKENS.push(ACCESS, REFRESH)
        docRef.update({'REFRESH':REFRESH})
        delete TOKENS[0]
        delete TOKENS[1]
        console.log(TOKENS)
    }

    async GiveRefreshToken(Email:String, Password:String){
        const SECRET_KEY='cAtInSign'
        let REFRESH=new REFRESH_TOKEN(Email,Password)
        const unsignedToken = MD5(REFRESH.header) + '.' +MD5(REFRESH.payload)
        const signature = MD5(unsignedToken+'.'+SECRET_KEY)
        return signature
    }
    async GiveAccessToken(Email:String, Password:String){
        const SECRET_KEY='outCaTsiGn'
        let ACCESS=new ACCESS_TOKEN(Email,Password)
        const unsignedToken = MD5(ACCESS.header) + '.' +MD5(ACCESS.payload)
        const signature = MD5(unsignedToken+'.'+SECRET_KEY)
        return signature
    }
    async UpdateRefreshToken(User:logindata){
        return {REFRESH_TOKEN}

    }
}