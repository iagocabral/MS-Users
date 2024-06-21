import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { addSwagger } from './app/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  // Configuração do CORS
  app.enableCors({
    origin: 'http://localhost:3003', // Substitua pela URL do seu cliente
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const PORT = configService.get<number>('PORT');
  addSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.warn(`server running in localhost:${PORT}`));
}
bootstrap();
