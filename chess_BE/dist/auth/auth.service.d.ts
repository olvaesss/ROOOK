import { userdata } from 'src/users/dto/userdata';
export declare class AuthService {
    GiveTokens(User: userdata): Promise<{
        REFRESH_TOKEN: {
            qwe: string;
        };
        ACCSES_TOKEN: {
            qweqsad: string;
        };
    }>;
}
