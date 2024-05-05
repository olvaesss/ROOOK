import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { NewsController } from "./news.controller";
import { NewsService } from "./news.service";

@Module({
    imports:[],
    controllers:[NewsController],
    providers:[NewsService, PrismaService]
})

export class NewsModule{}