import { Movie2Service } from './movie2.service';
import { Controller, Get } from '@nestjs/common';

@Controller('movie2')
export class Movie2Controller {
  constructor(private Movie2Service: Movie2Service) {}

  @Get('/:movieName/oldness')
  getOldness(movieName: string) {
    return this.Movie2Service.getOldness(movieName);
  }
}
