import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  GetMainData(){
    return this.appService.getMainTextAndImages()
  }
  
  @Get('/learn')
  GetLearnData(){
    return this.appService.getLearnTextAndImages()
  }
}
