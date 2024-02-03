import { DocumentSnapshot } from "firebase-admin/firestore"
import {DB} from "src/DataBase"

class LoginUserDTO{
    Email:string
    Password:string
    constructor(Email:string, Password:string){
        this.Email = Email,
        this.Password = Password
    }
}

export default LoginUserDTO