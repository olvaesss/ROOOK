export const getToken = () =>{
    const ACCESS = localStorage.getItem('ACCESS')
    const REFRESH =localStorage.getItem('REFRESH')
    return {ACCESS, REFRESH}
}


interface TOKENS{
    access:string,
    refresh:string
}
export const saveToken = (tokens:TOKENS | null | undefined) =>{
    try {
        if(!tokens) return null
        localStorage.setItem('ACCESS', tokens.access)
        localStorage.setItem('REFRESH', tokens.refresh)
        return console.log('saved')
    } catch (err) {
        return console.log(err)
    }
}