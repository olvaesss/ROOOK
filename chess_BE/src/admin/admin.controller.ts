import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
// import { isAdmin } from "./isAdmin.decorator";

@Controller('/admin')
export class AdminController{
    constructor(adminService:AdminService){
        
    }

    // @isAdmin()
    @Get(':id')
    GetAdminData(){
        return {}
    }

    @Get('')
    GetNews(){
        return {}
    }

    @Get('')
    GetPlayers(){
        return {}
    }

    // @isAdmin()
    @Post('')
    AproveNews(){
        return {}
    }

    // @isAdmin()
    @Delete('')
    DeleteNews(){
        return {}
    }

    // @isAdmin()
    @Put()
    Update(){
        return {}
    }
}