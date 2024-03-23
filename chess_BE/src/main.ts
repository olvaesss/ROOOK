import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.SERVER_PORT||3001
  app.enableCors({
    origin:true,
  })
  await app.listen(PORT);
}
bootstrap();
