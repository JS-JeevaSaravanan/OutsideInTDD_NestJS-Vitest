import { Controller, Get } from '@nestjs/common';

@Controller('movie2')
export class Movie2Controller {
  @Get('/:movieName/oldness')
  getOldness(movieName: string) {
    throw new Error('Not implemented');
  }
}
