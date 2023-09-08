import { JwtService } from '@nestjs/jwt';
import { userdata } from 'src/users/dto/userdata';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    GiveTokens(User: userdata): Promise<{
        access: string;
        refresh: string;
    }>;
}
