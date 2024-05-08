import { Module } from "@nestjs/common";
import { LearnController } from "./learn.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { LearnService } from "./learn.service";

@Module({
    imports:[],
    controllers:[LearnController],
    providers:[LearnService, PrismaService]
})

export class LearnModule{}