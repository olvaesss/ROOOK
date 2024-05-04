export const getToken = () =>{
    return localStorage.getItem('tokens')
}

export const saveToken = (tokens:string) =>{
    try {
        localStorage.setItem('tokens', tokens)
        return console.log('saved')
    } catch (err) {
        return console.log(err)
    }
}