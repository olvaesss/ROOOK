import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody, ConnectedSocket, ServerAndEventStreamsHost, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer() server:Server

  @SubscribeMessage('createRoom')
  async createRoom(@ConnectedSocket() socket: Socket) {
    return this.gameService.CreateRoom(socket);
  }

  handleConnection(socket: Socket): void {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket): void {
    console.log(`Client disconnected: ${socket.id}`);
  }
}
