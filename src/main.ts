import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Enable CORS for the application
  app.enableCors({
    origin: ['http://localhost:4200', 'https://app.example.com'],
    methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Start listening on the specified port
  await app.listen(port, () =>
    console.log('🚀 Server running at http://localhost:%s', port),
  );
}
bootstrap();
