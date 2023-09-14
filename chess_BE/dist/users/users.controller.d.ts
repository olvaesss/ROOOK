import { logindata, userdata } from './dto/userdata';
import { UsersService } from './users.service';
export declare class UsersController {
    private UserService;
    constructor(UserService: UsersService);
    GetUsers(): void;
    Register(data: userdata): void;
    Login(data: logindata): void;
}
