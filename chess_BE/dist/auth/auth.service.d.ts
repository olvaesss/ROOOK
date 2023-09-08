import { logindata, userdata } from 'src/users/dto/userdata';
import { REFRESH_TOKEN } from './auth.model';
export declare class AuthService {
    GiveTokens(User: userdata): Promise<void>;
    GiveRefreshToken(Email: String, Password: String): Promise<any>;
    GiveAccessToken(Email: String, Password: String): Promise<any>;
    UpdateRefreshToken(User: logindata): Promise<{
        REFRESH_TOKEN: typeof REFRESH_TOKEN;
    }>;
}
