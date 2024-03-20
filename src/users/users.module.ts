import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersEController } from './usersE.controller';
import { UsersEService } from './usersE.service';
import { UsersERepository } from './usersE.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController, UsersEController],
  providers: [UsersService, UsersRepository, UsersEService, UsersERepository],
})
export class UsersModule {}
