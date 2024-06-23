import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
// import { isAdmin } from "./isAdmin.decorator";

@Controller('/admin')
export class AdminController{
    constructor(private adminService:AdminService){
        
    }

    @Get('/news')
    async GetNewsRequest(){
        return await this.adminService.getNewsRequests()
    }

    @Get('/players')
    async GetPlayers(){
        return await this.adminService.getUsers()
    }

    @Put('/approve/:id')
    async ApproveNews(@Param() id:any){
        return await this.adminService.ApproveNews(Number(id.id))
    }

    @Delete('/:id')
    async DeleteUser(@Param() id:any){
        return await this.adminService.deleteUser(Number(id.id))
    }

    @Delete("reject/:id")
    async Reject(@Param() id:any){
        return await this.adminService.reject(Number(id.id))
    }

    @Put()
    Update(){
        return {}
    }
}