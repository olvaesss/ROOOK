import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EmailService{
    constructor(private prisma:PrismaService){
        
    }

    async ConfirmEmail(Email:string){
        
    }
}