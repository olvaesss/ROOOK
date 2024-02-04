import { Injectable } from '@nestjs/common';
import {Player, PrismaClient} from '@prisma/client'

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

  async createUser(Player:Player){
    try {
      await this.prisma.player.create({data:Player})
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
}
