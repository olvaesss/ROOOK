export class REFRESH_TOKEN{
    secret:String
}

export class ACCESS_TOKEN{
    lifetime:Number;//in seconds
    secret:String
}

export let TOKENS: [ACCESS_TOKEN, REFRESH_TOKEN] //модель массива токена который я буду возвращать 
