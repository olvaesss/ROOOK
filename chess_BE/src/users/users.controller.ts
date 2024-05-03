import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService, private Prisma:PrismaService){}

     @Post('Register')
     Register(@Body() data:Player){
          return this.UserService.Register(data);
          
     }
     @Post('Login')
     Login(@Body() data:any){
          return this.UserService.Login(data);
     }
}
