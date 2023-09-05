import { Injectable } from '@nestjs/common';
import { getDataCurrent } from 'src/DataBase';
import { logindata, userdata} from 'src/users/dto/userdata';

@Injectable()
export class AuthService {
    

    async GiveTokens(User:userdata){
        const doc = (await getDataCurrent('users', User.Email)).doc
        const docRef= (await getDataCurrent('users', User.Email)).docRef
        const REFRESH_TOKEN = {'qwe':'qwe'}
        const ACCSES_TOKEN = {'qweqsad':'qwdas'}
        docRef.set(REFRESH_TOKEN)
        return {REFRESH_TOKEN, ACCSES_TOKEN}
    }
}