import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UpdateUserRequest } from './dto/request/update-user-request.dto';

import { User } from './schemas/user.schema';
import { UsersEService } from './usersE.service';

@Controller('userse')
export class UsersEController {
  constructor(private readonly usersEService: UsersEService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersEService.getUser({ userId });
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersEService.getUsers();
  }

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<User> {
    return this.usersEService.createUser(createUserRequest);
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserRequest: UpdateUserRequest,
  ): Promise<User> {
    return this.usersEService.updateUser({ userId, ...updateUserRequest });
  }
}
