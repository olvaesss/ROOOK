import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Tokens from './dto/tokensDTO';
import { Player } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async GiveTokens(Player: Player) {
        const payload = { Email: Player.EMAIL, Name: Player.USERNAME };
        const REFRESH = await this.jwtService.signAsync(payload, { expiresIn: '30d' });
        const ACCESS = await this.jwtService.signAsync(payload, { expiresIn: '24h' });

        return {
            access: ACCESS,
            refresh: REFRESH
        };
    }

    async CheckTokens(data: Tokens) {
        try {
            const refreshData = await this.jwtService.verifyAsync(data.refresh);
            const accessData = await this.jwtService.verifyAsync(data.access);
            console.log(refreshData, accessData)
        } catch (error) {
            // Обработка ошибок валидации токенов
            console.log(error)
            throw new Error('Invalid token');
        }
    }
}
