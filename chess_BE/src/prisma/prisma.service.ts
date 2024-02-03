import { Injectable } from '@nestjs/common';
import {Player, PrismaClient} from '@prisma/client'
import IUser from 'src/users/interfaces/IUser';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUser(Email:string){
    const User = await this.prisma.player.findFirst({where:{EMAIL:Email}})
    return User
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

  async deleteUser(Email:string){
    try {
      const User = await this.getUser(Email)
      await this.prisma.player.delete({where:{ID_PLAYER:User.ID_PLAYER}})
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async updateUser(Player:Player){
    try {
      const User = await this.getUser(Player.EMAIL)
      await this.prisma.player
    } catch (err) {
      console.log(err)
      return false
    }
  }
  get client() {
    return this.prisma;
  }
}
