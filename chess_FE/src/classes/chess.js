const LettersArr = ['a','b','c','d','e','f','g','h',]
let Desk=[]
for(let i=0; i<=7; i++){
    Desk[i]=[]
    for(let j = 0;j<=7;j++){
        Desk[i][j]=LettersArr[i]+String(j)
    }
}

const WHITE='w';
const BLACK='b';

class chess {
    Color='w'||'b';
    Type=String;
    position=Number;
    eat(to, what){

    };
    move(to){
        to;
        check()
    }
    check(){

    }
}

class pawn extends chess{
    Type = 'pawn'
}
class knight extends chess{
    Type = 'knight'
}
class bishop extends chess{
    Type = 'bishop'
}
class rook extends chess{
    Type = 'rook'
}
class queen extends chess{
    Type = 'queen'
}
class king extends chess{
    Type = 'king'
}

