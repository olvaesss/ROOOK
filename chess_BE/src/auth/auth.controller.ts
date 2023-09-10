import { Body, Controller, Get, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userdata } from 'src/users/dto/userdata';

@Controller('users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/')
  @Redirect('/')
  async index(@Body() data:userdata){
    return await this.authService.GiveTokens(data)
  }
}