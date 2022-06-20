import { Injectable, Inject } from '@nestjs/common';
import { userProvider } from 'src/provider/user.provider';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(userProvider[0].provide)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}