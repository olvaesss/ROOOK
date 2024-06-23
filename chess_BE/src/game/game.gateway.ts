import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody, ConnectedSocket, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer() server: Server;

  handleConnection(socket: Socket): void {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket): void {
    console.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('move')
  handleMove(@MessageBody() move: any, @ConnectedSocket() socket: Socket): void {
    // Обработка хода
    // Пересылка хода другому игроку
    socket.broadcast.emit('move', move); // Пересылка хода всем подключенным клиентам кроме отправителя
  }
}
