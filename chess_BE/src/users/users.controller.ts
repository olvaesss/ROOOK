import { Body, Controller, Get, Param, Post, Redirect, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Player } from '@prisma/client';
import { LoginDTO } from './dto/LoginDTO';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService, private Prisma:PrismaService){}

     @Get('/:id')
     @UseGuards(AuthGuard('jwt'))
     GetUserData(@Param('id') id:string){
          return this.UserService.getUserData(id)
     }

     @Post('Register')
     Register(@Body() data:Player){
          return this.UserService.Register(data);
          
     }
     @Post('Login')
     async Login(@Body() data:LoginDTO){
          const USER = await this.UserService.Login(data);
          console.log(USER)
          return USER
     }
}
