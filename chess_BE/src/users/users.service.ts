import { Injectable } from '@nestjs/common';
import { userdata } from './dto/userdata';
import { db, getDataCurrent } from 'src/DataBase';

@Injectable()
export class UsersService {

    async Register(User:userdata){//Сервис регистрации нового игрока
        const  doc = (await getDataCurrent('users', User.Email)).doc
        const  docRef = (await getDataCurrent('users', User.Email)).docRef
        if((await doc).exists){
            return 400
        }
        else{
            User.CreateDate = new Date
            docRef.set(User)
            return 200
        }
    }
}
