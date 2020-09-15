import { Controller, Get } from '@nestjs/common';

@Controller('course')
export class coursecontroller {

  @Get('hello')
  getHello():string {
    return 'need';
  }
}
