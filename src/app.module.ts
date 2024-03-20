import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      validate: () =>
        Joi.object({
          MONGO_CONNECTION_URI: Joi.string().required(),
          MONGO_TEST_CONNECTION_URI: Joi.string().required(),
        }),
    }),
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
