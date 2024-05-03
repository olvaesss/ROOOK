import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
// import { isAdmin } from "./isAdmin.decorator";

@Controller('/admin')
export class AdminController{
    constructor(adminService:AdminService){
        
    }

    // @isAdmin()
    @Get('')
    GetNews(){
        return {}
    }

    // @isAdmin()
    @Post('')
    Add(){
        return {}
    }

    // @isAdmin()
    @Delete('')
    Delete(){
        return {}
    }

    // @isAdmin()
    @Put()
    Update(){
        return {}
    }
}