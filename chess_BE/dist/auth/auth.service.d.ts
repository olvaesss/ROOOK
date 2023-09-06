import { logindata, userdata } from 'src/users/dto/userdata';
import { REFRESH_TOKEN, ACCESS_TOKEN } from './auth.model';
export declare class AuthService {
    GiveTokens(User: userdata): Promise<void>;
    GiveRefreshToken(Email: String): Promise<REFRESH_TOKEN>;
    GiveAccessToken(Email: String): Promise<ACCESS_TOKEN>;
    UpdateRefreshToken(User: logindata): Promise<{
        REFRESH_TOKEN: typeof REFRESH_TOKEN;
    }>;
}
