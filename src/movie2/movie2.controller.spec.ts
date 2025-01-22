import { Test, TestingModule } from '@nestjs/testing';
import { Movie2Controller } from './movie2.controller';

describe('Movie2Controller', () => {
  let controller: Movie2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Movie2Controller],
    }).compile();

    controller = module.get<Movie2Controller>(Movie2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
