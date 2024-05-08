import { Controller, Get, Param } from "@nestjs/common";
import { LearnService } from "./learn.service";

@Controller('/learn')
export class LearnController{
    constructor(private LearnService:LearnService){}

    @Get('/:id')
    GetLearnById(@Param('id') id:string){
        return this.LearnService.getById(id)
    }
}