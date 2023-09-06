import { Injectable } from '@nestjs/common';
import { logindata, userdata } from './dto/userdata';
import { db, getDataCurrent } from 'src/DataBase';

@Injectable()
export class UsersService {

    async Register(User:userdata){//регестр сервис
        const  doc = (await getDataCurrent('users', User.Email)).doc
        const  docRef = (await getDataCurrent('users', User.Email)).docRef
        if((await doc).exists){
            return console.log('unreg')
        }
        else{
            User.CreateDate = new Date
            docRef.set(User)
            return console.log('reg')
        }
    }
    async Login(User:logindata){//логин сервис
        const  doc = (await getDataCurrent('users', User.Email)).doc
        const  docRef = (await getDataCurrent('users', User.Email)).docRef
        let data = await doc.data()
        if((await doc).exists){
            if((User.Email==data.Email)&&(User.Password==data.Password)){
                return console.log("Succses")
            }
            else{
                return console.log("Invalid input data")
            }
        }
        else{
            return console.log("Invalid input data")
        }
    }
}
