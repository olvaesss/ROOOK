import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService, private Prisma:PrismaService){}

     @Get('/:id')
     GetUserData(@Param() data:any){
          return this.UserService.getUserData(data)
     }

     @Post('Register')
     Register(@Body() data:Player){
          return this.UserService.Register(data);
          
     }
     @Post('Login')
     async Login(@Body() data:any){
          const USER = await this.UserService.Login(data);
          console.log(USER)
          return USER
     }
}
