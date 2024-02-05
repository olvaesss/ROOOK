import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/')
  async getTokens(@Body() data:any){
    return await this.authService.GiveTokens(data)
  }

  @Post('/')
  async checkTokens(@Body() data:{}){
    return await this.authService
  }
}