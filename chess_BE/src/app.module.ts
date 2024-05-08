import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AdminModule } from './admin/admin.module';
import { LearnModule } from './learning/learn.module';

@Module({
  imports: [UsersModule, AdminModule, LearnModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
