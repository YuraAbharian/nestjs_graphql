import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserInput } from '../inputs/create-user.input';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserInput } from '../inputs/update-user.input';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  /**
   * @param {UsersRepository} userRepository
   */
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userInput: CreateUserInput): Promise<UserEntity> {
    console.log(this.userRepository);
    return this.userRepository.save(userInput);
  }

  async getUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id } });
  }

  async getUsers(): Promise<Array<UserEntity>> {
    return this.userRepository.find();
  }

  async deleteUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser({ id, ...input }: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update({ id }, input);
    return this.getUserById(id);
  }
}
