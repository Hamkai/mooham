import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { coursecontroller } from './coursecontroll';

@Module({
  imports: [],
  controllers: [AppController,coursecontroller],
  providers: [AppService],
})
export class AppModule {}
