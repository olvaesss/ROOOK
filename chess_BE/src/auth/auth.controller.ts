import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userdata } from 'src/users/dto/userdata';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './auth.model';

@Controller('users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('')
  index(@Body() data:userdata){
    this.authService.GiveTokens(data)
    return {ACCESS_TOKEN, REFRESH_TOKEN}
  }
}