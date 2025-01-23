import { Module } from '@nestjs/common';
import { Movie2Controller } from './movie2.controller';
import { Movie2Service } from './movie2.service';

@Module({
  controllers: [Movie2Controller],
  providers: [Movie2Service],
})
export class Movie2Module {}
