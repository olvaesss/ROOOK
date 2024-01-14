import { Body, Controller, Get, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/')
  @Redirect('/')
  async index(@Body() data:any){
    return await this.authService.GiveTokens(data)
  }
}