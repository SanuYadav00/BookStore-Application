import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome() {
    return {
      message: '📚 Welcome to Sanu’s Bookstore API!',
      docs: '/swagger',
    };
  }
}
