import { Injectable } from '@nestjs/common';
import {News, Player, PrismaClient} from '@prisma/client'

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUser(Email:string):Promise<Player|null>{
    try {
      const User = await this.prisma.player.findFirst ({where:{EMAIL:Email}})
      return User
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async createUser(data:Player){
    try {
      await this.prisma.player.create({data})
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async deleteUser(Player:Player){
    try {
      await this.prisma.player.delete({where:{ID_PLAYER:Player.ID_PLAYER}})
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async updateUser(Player:Player){
    try {
      await this.prisma.player.update({where:{ID_PLAYER:Player.ID_PLAYER},data:Player})
    } catch (err) {
      console.log(err)
      return false
    }
  }
  get client() {
    return this.prisma;
  }

  async createNews(data:News){
    try {
      if(await this.prisma.news.findFirst({where:{ID_NEWS:data.ID_NEWS}})) return false
      await this.prisma.news.create({data})
      return data
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async getAllNews(){
    try {
      const NEWS = await this.prisma.news.findMany()
      return NEWS
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async getNews(data:number){
    const NEWS = await this.prisma.news.findFirst({where:{ID_NEWS:data}})
    return NEWS
  }

  async addNews(data:News){
    try {
      await this.prisma.news.create({data})
      return data
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async deleteNews(data:number){
    try {
      await this.prisma.news.delete({where:{ID_NEWS:data}})
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async updateNews(data:News){
    try {
      await this.prisma.news.update({where:{ID_NEWS:data.ID_NEWS}, data})
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
