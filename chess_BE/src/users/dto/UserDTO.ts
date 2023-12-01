export class User {
    Email:string
    Password:string
    Username:string
    CreateDate:Date
    constructor(Email:string, Password:string, Username:string){
        this.Email=Email
        this.Password=Password
        this.Username=Username
        this.CreateDate = new Date
    }
}