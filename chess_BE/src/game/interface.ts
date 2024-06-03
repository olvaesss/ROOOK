export class Game {
    ID_ROOM:string
    PLAYER_1:string
    PLAYER_2:string
    WINNER:boolean | null

    constructor(ID_ROOM:string, PLAYER_1:string, PLAYER:string){
        this.ID_ROOM=ID_ROOM
        this.PLAYER_1=PLAYER_1
        this.PLAYER_2=this.PLAYER_2
        this.WINNER = null
    }
}

export interface IGane{
    ID_ROOM:string
    PLAYER_1:string
    PLAYER_2:string
    WINNER:boolean | null
}