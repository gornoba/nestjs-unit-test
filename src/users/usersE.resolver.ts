import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { UpdateUserInput } from './dto/input/update-user-input.dto';

import { User } from './schemas/user.schema';
import { UsersEService } from './usersE.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersEService: UsersEService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.usersEService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  async getUsers(): Promise<User[]> {
    return this.usersEService.getUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.usersEService.createUser(createUserData);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<User> {
    return this.usersEService.updateUser(updateUserData);
  }
}
