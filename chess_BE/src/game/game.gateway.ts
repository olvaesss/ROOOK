import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gameService: GameService) {}

  handleConnection(socket: Socket): void {
    console.log(`Client connected: ${socket.id}`);

    socket.on('createRoom', () => {
      this.gameService.CreateRoom(socket);
    });

    // Handle other socket events

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
      // Handle disconnection logic if needed
    });
  }

  handleDisconnect(socket: Socket): void {
    console.log(`Client disconnected: ${socket.id}`);
    // Handle disconnection logic if needed
  }
}