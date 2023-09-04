import { Body, Controller, Get, Post } from '@nestjs/common';
import { logindata, userdata } from './dto/userdata';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService){}

     @Get('/')
     GetUsers(){
          return 'users'
     }
     @Post('Register')
     Register(@Body() data:userdata){
          this.UserService.Register(data);
          return 'okey'
     }

     @Post('Login')
     Login(@Body() data:logindata){
          this.UserService.Login(data);
     }
}
