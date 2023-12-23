import { DocumentSnapshot } from "firebase-admin/firestore"
import {DB} from "src/DataBase"

class LoginUserDTO{
    Email:string
    Password:string
    constructor(Email:string, Password:string){
        this.Email = Email,
        this.Password = Password
    }
    private Login():any{
        let doc = DB.getUser(this.Email, this.Password)
        if(!doc) return null
        
    }
}

export default LoginUserDTO