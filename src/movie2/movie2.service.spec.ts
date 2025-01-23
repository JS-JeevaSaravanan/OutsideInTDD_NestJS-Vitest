import { Test, TestingModule } from '@nestjs/testing';
import { Movie2Service } from './movie2.service';

describe('Movie2Service', () => {
  let service: Movie2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Movie2Service],
    }).compile();

    service = module.get<Movie2Service>(Movie2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
