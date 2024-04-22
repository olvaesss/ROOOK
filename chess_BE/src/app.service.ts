import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    async getMainTextAndImages(){
        let titles = ['Научитесь играть!!!', 'Играйте с друзьями', 'Растите до гроссмейстера']
        let text = ['Начните свой путь с освоения основ. Узнайте о каждой фигуре, о правилах игры, о стратегиях и тактиках. Наши уроки будут пошагово вести вас от новичка до опытного игрока.',
         'Шахматы - это не только соревнование, но и возможность объединиться с друзьями. Играйте онлайн, вызывайте своих товарищей на дуэль, обсуждайте свои ходы и разрабатывайте новые стратегии вместе.',
          'Стремитесь к вершинам шахматного мастерства. Участвуйте в турнирах, соревнуйтесь с лучшими, улучшайте свои навыки и достигайте новых высот. С нами вы сможете стать настоящим гроссмейстером!']
        let images = []
        return {titles, text, images}
    }

    async getLearnTextAndImages(){
        let titles = []
        let text = []
        let images = []
        return {titles, text, images}
    }

    async getNews(){
        let titles = []
        let text = []
        let images = []
        return {titles, text, images}
    }
}
