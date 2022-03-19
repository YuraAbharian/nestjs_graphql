import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../entities/user.entity';
import { CreateUserInput } from '../inputs/create-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';

@Resolver('User')
export class UsersResolver {
  /**
   * @param {UsersService} usersService
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * createUser - creates a user
   * @param {CreateUserInput} data
   * @return {UserEntity}
   */
  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') data: CreateUserInput,
  ): Promise<UserEntity> {
    return this.usersService.createUser(data);
  }

  /**
   * updateUser - updates a user
   * @param {UpdateUserInput} data
   * @return {UserEntity}
   */
  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUser') data: UpdateUserInput,
  ): Promise<UserEntity> {
    return this.usersService.updateUser(data);
  }

  /**
   * deleteUser - deletes a user
   * @param {number} id
   * @return {{ success: boolean }}
   */
  @Mutation(() => Number)
  async deleteUser(@Args('id') id: number): Promise<number> {
    return this.usersService.deleteUser(id);
  }

  /**
   * getUserById - returns a user
   * @param {number} id
   * @return {UserEntity}
   */
  @Query(() => UserEntity, { nullable: true })
  async getUserById(@Args('id') id: number): Promise<UserEntity> {
    return this.usersService.getUserById(id);
  }

  /**
   * getUsers - return users
   * @return {UserEntity}
   */
  @Query(() => [UserEntity])
  async getUsers(): Promise<UserEntity[]> {
    return this.usersService.getUsers();
  }
}
