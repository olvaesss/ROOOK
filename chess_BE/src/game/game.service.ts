import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaService } from "src/prisma/prisma.service";
import { Socket } from 'socket.io';

@Injectable()
export class GameService {
  constructor(private prismaService: PrismaService) {}

  async GetGameMods() {
    return await this.prismaService.GetMods();
  }

  async CreateRoom(socket: Socket) {
    const roomID = randomUUID();
    socket.emit('roomCreated', { roomID });
    console.log(roomID)
    return roomID
  }
}