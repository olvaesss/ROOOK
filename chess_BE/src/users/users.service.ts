import { Injectable } from '@nestjs/common';
import { userdata } from './dto/userdata';
import { db } from 'src/DataBase';

@Injectable()
export class UsersService {

    Register(data:userdata){//Сервис регистрации нового игрока
    }
}
