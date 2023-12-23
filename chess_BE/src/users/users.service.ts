import { Injectable } from '@nestjs/common';
import { User } from './dto/UserDTO';

@Injectable()
export class UsersService {

    async Register(User:User){//регестр сервис
        
    }
    async Login(User:User){//логин сервис
    }
}
