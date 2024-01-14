import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService){}

     @Get('/')
     GetUsers(){
     }
     @Post('Register')
     Register(@Body() data:any){
          this.UserService.Register(data);
     }
     @Redirect('users/auth')

     @Post('Login')
     Login(@Body() data:any){
          this.UserService.Login(data);
     }
}
