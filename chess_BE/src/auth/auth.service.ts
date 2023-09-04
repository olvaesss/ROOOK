import { Injectable } from '@nestjs/common';
import { getDataCurrent } from 'src/DataBase';
import { logindata} from 'src/users/dto/userdata';

@Injectable()
export class AuthService {
    

    async GiveToken(User:logindata){
        const doc = (await getDataCurrent('users', User.Email)).doc
        
        return {'token':'qwe'}
    }
}