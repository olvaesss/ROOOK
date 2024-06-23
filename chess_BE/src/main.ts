import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3001
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions) 
  console.log("server running on port", PORT)
  await app.listen(PORT)
}
bootstrap();
