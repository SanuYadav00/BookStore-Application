// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   const config = new DocumentBuilder()
//     .setTitle('Bookstore API')
//     .setDescription('API for managing books and users')
//     .setVersion('1.0')
//     .addBearerAuth()
//     .build();

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('swagger', app, document); // http://localhost:3000/swagger

//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serving static HTML pages from the 'public' folder
  app.use(express.static(join(__dirname, '..', 'public')));

  // Automatically validating DTOs using class-validator
  app.useGlobalPipes(new ValidationPipe());

  
  await app.listen(3000);
  console.log(`🚀 App running at http://localhost:3000`);
}
bootstrap();
