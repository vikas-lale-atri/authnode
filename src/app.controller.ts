import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import{AuthGuard} from '@nestjs/passport'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('logo')
  @UseGuards(AuthGuard())
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  RegisterUser(){

  }
}
