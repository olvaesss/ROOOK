import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService, private Prisma:PrismaService){}

     @Post('Register')
     Register(@Body() data:Player){
          this.UserService.Register(data);
          
     }
     @Redirect('users/auth')
     @Post('Login')
     Login(@Body() data:any){
          this.UserService.Login(data);
     }
}
