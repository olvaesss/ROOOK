import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { logindata, userdata } from './dto/UserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService){}

     @Get('/')
     GetUsers(){
     }
     @Post('Register')
     Register(@Body() data:userdata){
          this.UserService.Register(data);
     }
     @Redirect('users/auth')

     @Post('Login')
     Login(@Body() data:logindata){
          this.UserService.Login(data);
     }
}
