import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    async getMainTextAndImages(){
        let titles = ['Научитесь играть!!!', 'Играйте с друзьями', 'Растите до гроссмейстера']
        let text = ['Начните свой путь с освоения основ. Узнайте о каждой фигуре, о правилах игры, о стратегиях и тактиках. Наши уроки будут пошагово вести вас от новичка до опытного игрока.',
         'Шахматы - это не только соревнование, но и возможность объединиться с друзьями. Играйте онлайн, вызывайте своих товарищей на дуэль, обсуждайте свои ходы и разрабатывайте новые стратегии вместе.',
          'Стремитесь к вершинам шахматного мастерства. Участвуйте в турнирах, соревнуйтесь с лучшими, улучшайте свои навыки и достигайте новых высот. С нами вы сможете стать настоящим гроссмейстером!']
        let images = [
            '/images/chess_teach.jpg',
            '/images/play_friends.jpg',
            '/images/gross.jpg'
        ]
        return {titles, text, images}
    }

    async getLearnTextAndImages(){
        let titles = ["Король", "Ферзь", "Ладья", "Слон", "Конь", "Пешка"]
        let text = [
        "Король (K): Ходит на одно поле в любом направлении: вертикально, горизонтально или по диагонали. Очень ценный игрок, его утрата обычно ведет к поражению. Король может быть под шахом, что означает, что его следующий ход может поставить его под угрозу захвата другой фигурой противника. Король не может совершать ходы, которые поставят его под нападение противника. Король не может съесть защищенные фигуры противника.",
        "Ферзь (Q): Самая мощная фигура, может ходить как слон и ладья. Двигается по вертикалям, горизонталям и диагоналям на любое количество пустых клеток.",
        "Ладья (R): Ходит только по вертикалям или горизонталям. Может перемещаться на любое количество пустых клеток, пока нет препятствий",
        "Слон (B): Ходит по диагоналям. Движется на любое количество пустых клеток по диагонали.",
        "Конь (N): Единственная фигура, которая может прыгать через другие фигуры. Делает ход в форме буквы 'L': два поля в одном направлении и одно в перпендикулярном к нему направлении.",
        "Пешка (P): Ходит вперед на одну клетку, но захватывает фигуры противника только по диагонали. При первом ходе может сделать два шага вперед. При достижении противоположного края доски пешка может быть превращена в любую другую фигуру, за исключением короля."]
        let images = [
            '/images/king_moves.jpg',
            '/images/queen_moves.jpg',
            '/images/rook_moves.jpg',
            '/images/bishop_moves.jpg',
            '/images/knight_moves.jpg',
            '/images/pawn_moves.jpg',
        ]
        return {titles, text, images}
    }


    async getAbout(){

    }
}
