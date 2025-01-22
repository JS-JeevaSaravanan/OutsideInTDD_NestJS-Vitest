import { Module } from '@nestjs/common';
import { Movie2Controller } from './movie2.controller';

@Module({
  controllers: [Movie2Controller]
})
export class Movie2Module {}
