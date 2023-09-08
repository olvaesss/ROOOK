export class REFRESH_TOKEN{
    constructor(Email:String, Password:String){
        this.payload={}
        this.payload.Email=Email;
        this.payload.Password=Password
    }
    header:{'alg':"MD5",'typ':'REF'}
    payload: any
}

export class ACCESS_TOKEN{
    constructor(Email:String, Password:String){
        this.lifetime=86400;//in seconds
        this.payload={}
        this.payload.Email=Email;
        this.payload.Password=Password
    }
    lifetime:Number;
    header:{'alg':"MD5",'typ':'ACC'}
    payload: any
}
    

export let TOKENS = [] //модель массива токена который я буду возвращать 
