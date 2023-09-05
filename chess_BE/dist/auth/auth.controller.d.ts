import { AuthService } from './auth.service';
import { userdata } from 'src/users/dto/userdata';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    index(data: userdata): string;
}
