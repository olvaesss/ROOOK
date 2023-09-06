export class REFRESH_TOKEN{
    header:{'alg':"HS256",'typ':'JWT'}
    payload: {'Email':String,'Password':String}
}

export class ACCESS_TOKEN{
    lifetime:Number;//in seconds
    header:{'alg':String,'typ':'JWT'}
    payload: {'Email':String,'Password':String}}

export let TOKENS: [ACCESS_TOKEN, REFRESH_TOKEN] //модель массива токена который я буду возвращать 
