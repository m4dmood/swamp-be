import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { User } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private userController: UserController) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.userController.findAll();
  }
}
