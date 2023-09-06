import { Body, Controller, Get, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userdata } from 'src/users/dto/userdata';
import { TOKENS } from './auth.model';

@Controller('users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/')
  @Redirect('/')
  index(@Body() data:userdata){
    this.authService.GiveTokens(data)
    return {TOKENS}
  }
}