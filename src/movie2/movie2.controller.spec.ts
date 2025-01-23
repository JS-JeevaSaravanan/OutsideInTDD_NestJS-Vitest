import { Movie2Service } from './movie2.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Movie2Controller } from './movie2.controller';
import { vi } from 'vitest';

describe('Movie2Controller', () => {
  let controller2: Movie2Controller;
  let movie2Service: Movie2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Movie2Service],
      controllers: [Movie2Controller],
    }).compile();

    controller2 = module.get<Movie2Controller>(Movie2Controller);
    movie2Service = module.get<Movie2Service>(Movie2Service);
  });

  it('should be defined', () => {
    expect(controller2).toBeDefined();
  });

  it("should give movie's oldness", () => {
    // given
    const movieName = 'fakeMovie';
    movie2Service.getOldness = vi.fn().mockImplementationOnce(() => 'old');

    // when
    const response = controller2.getOldness(movieName);
    // then
    expect(response).toBeDefined();
    expect(movie2Service.getOldness).toHaveBeenCalledWith('fakeMovie');
    expect(response).toEqual('old');
  });
});
