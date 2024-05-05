import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { NewsService } from "./news.service";
import { News } from "@prisma/client";

@Controller('/news')
export class NewsController{
    constructor(private newsService:NewsService){}

    @Get('')
    GetAllNews(){
        return this.newsService.GetAllNews()
    }

    @Get('/:id')
    getNews(data:number){
        return this.newsService.getNews(data)
    }

    @Post('')
    CreateNews(data:News){
        return this.newsService.addNews(data)
    }

    @Put('')
    UpdateNews(data:News){
        return this.newsService.updateNews(data)
    }

    @Delete('')
    DeleteNews(data:number){
        return this.newsService.deleteNews(data)
    }
}