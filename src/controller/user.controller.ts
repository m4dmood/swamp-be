import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/entity/user.entity';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {

  constructor (private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
    // return 'This action returns all users';
  }
}