import { logindata, userdata } from './dto/userdata';
export declare class UsersService {
    Register(User: userdata): Promise<void>;
    Login(User: logindata): Promise<void>;
}
