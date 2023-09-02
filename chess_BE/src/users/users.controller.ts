import { Body, Controller, Post } from '@nestjs/common';
import { userdata } from './dto/userdata';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     constructor(private UserService: UsersService){}


     @Post('Register')
     Register(@Body() data:userdata){
          this.UserService.Register(data);
     }
}
