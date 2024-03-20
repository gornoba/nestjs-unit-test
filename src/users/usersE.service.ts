import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { UpdateUserInput } from './dto/input/update-user-input.dto';
import { User } from './schemas/user.schema';
import { UsersERepository } from './usersE.repository';

@Injectable()
export class UsersEService {
  constructor(private readonly usersERepository: UsersERepository) {}

  async getUser(getUserArgs: GetUserArgs): Promise<User> {
    return this.usersERepository.findOne(getUserArgs);
  }

  async getUsers(): Promise<User[]> {
    return this.usersERepository.find({});
  }

  async createUser(createUserData: CreateUserInput): Promise<User> {
    return this.usersERepository.create({
      userId: uuidv4(),
      email: createUserData.email,
      age: createUserData.age,
      favoriteFoods: [],
    });
  }

  async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    return this.usersERepository.findOneAndUpdate(
      { userId: updateUserData.userId },
      updateUserData,
    );
  }
}
