import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger' 
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle("Sensores API CRUD")
    .setDescription("Aplicacion de CRUD para sensores con react, nestjs y mongodb")
    .setVersion("1.0")
    .build()
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup("docu-sensores", app, document)

  
  await app.listen(3002);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
