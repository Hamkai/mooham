import { Controller, Get } from '@nestjs/common';

@Controller('course')
export class coursecontroller {

  @Get()
  findall():any {
    return {
      message:'good morning'
    };
  }
}
