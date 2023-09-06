import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userdata } from 'src/users/dto/userdata';
import { TOKENS } from './auth.model';

@Controller('users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('')
  index(@Body() data:userdata){
    this.authService.GiveTokens(data)
    return {TOKENS}
  }
}