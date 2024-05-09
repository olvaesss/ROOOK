export const getToken = () =>{
    return localStorage.getItem('tokens')
}


interface TOKENS{
    access:string,
    refresh:string
}
export const saveToken = (tokens:TOKENS) =>{
    try {
        localStorage.setItem('ACCESS', tokens.access)
        localStorage.setItem('REFRESH', tokens.refresh)
        return console.log('saved')
    } catch (err) {
        return console.log(err)
    }
}