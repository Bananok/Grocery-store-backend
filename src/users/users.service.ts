import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async getOne(login: User['login']): Promise<User> {
    return this.usersRepository.findOne({ where: { login: login } });
  }

  async getOneOrFail(id: User['id']): Promise<User> {
    return this.usersRepository.findOneOrFail({ where: { id: id } });
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save(user);
  }
}
