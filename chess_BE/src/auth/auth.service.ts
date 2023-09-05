import { Injectable } from '@nestjs/common';
import { getDataCurrent } from 'src/DataBase';
import { logindata, userdata} from 'src/users/dto/userdata';
import { REFRESH_TOKEN, ACCESS_TOKEN} from './auth.model';

@Injectable()
export class AuthService {

    async GiveTokens(User:userdata){
        const doc = (await getDataCurrent('users', User.Email)).doc
        const docRef= (await getDataCurrent('users', User.Email)).docRef
        const REFRESH:REFRESH_TOKEN = await this.GiveRefreshToken(User.Email)
        const ACCESS:ACCESS_TOKEN = await this.GiveAccessToken(User.Email)
        return {REFRESH, ACCESS}
    }

    async GiveRefreshToken(Email:String){
        let REFRESH:REFRESH_TOKEN
        return REFRESH
    }
    async GiveAccessToken(Email:String){
        let ACCESS:ACCESS_TOKEN
        return ACCESS
    }
    async UpdateRefreshToken(User:logindata){
        return {REFRESH_TOKEN}

    }
}