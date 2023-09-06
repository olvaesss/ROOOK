import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('')
  index(){
    return 'index page'// чек jwt подгрузка данных юзера если есть  токен
  }
}
