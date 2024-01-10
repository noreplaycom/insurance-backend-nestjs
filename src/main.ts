import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { IExceptionFilter } from './utils/exception/custom-exception-filter';
import { ConfigService } from '@nestjs/config';
// Ignore the import errors
import { graphqlUploadExpress } from 'graphql-upload';
import { postgresBackup } from './utils/database-import.function';
import { InitializationService } from './services/initialization/initialization.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new IExceptionFilter()); //doesn't work
  const configService = app.get(ConfigService);

  const port = configService.get<number>('APP_PORT');
  const environment = configService.get<string>('NODE_ENV');

  //supaya client bisa download file
  app.enableCors({
    origin: '*', // You can specify the allowed origins here (e.g., 'http://example.com')
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Content-Disposition', // Add Content-Disposition
  });

  //Supaya bisa upload file
  app.use(
    graphqlUploadExpress({
      maxFileSize: 250000000, // max is 250mb
      maxFiles: 10,
    }),
  );

  //custom initialization
  const initializationService = app.get(InitializationService);
  try {
    await initializationService.initialize();
  } catch (error) {
    console.error('Initialization failed:', error);
  }

  await app.listen(port);
  console.log(`Application is running in ${environment} mode on port ${port}`);

  //check is fresh start with empty database

  // const dbconnectionString = configService.get('DATABASE_URL');
  // await postgresBackup(dbconnectionString);
}
bootstrap();
