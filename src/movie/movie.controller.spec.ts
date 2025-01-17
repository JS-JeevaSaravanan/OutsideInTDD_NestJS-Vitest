import { MovieController } from './movie.controller';
import { vi } from 'vitest';
import { MovieService } from './movie.service';
import { Test, TestingModule } from '@nestjs/testing';
import { MovieGateway } from './movie.gateway';

describe('MovieController', () => {
  let controller: MovieController;
  let movieService: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: MovieGateway,
          useValue: {},
        },
      ],
      controllers: [MovieController],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    movieService = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('given a movie name, it should give oldness', () => {
    // given
    const movieName = 'fakeMovie';
    movieService.getOldness = vi.fn().mockImplementationOnce(() => 'old');

    // when
    const response = controller.getOldness(movieName);

    // then
    expect(response).toBeDefined();
    expect(movieService.getOldness).toHaveBeenCalledWith('fakeMovie');
    expect(response).toEqual('old');
  });

  it('given a movie name, it should give profitability', async () => {
    // given
    const movieName = 'fakeMovie';
    movieService.getProfitability = vi
      .fn()
      .mockImplementationOnce(() => 'PROFITABLE');

    // when
    const response = controller.getProfitability(movieName);

    // then
    expect(response).toBeDefined();
    expect(movieService.getProfitability).toHaveBeenCalledWith('fakeMovie');
    expect(response).toEqual('PROFITABLE');
  });

  it('given a movie name, it should give rating', async () => {
    // given
    const movieName = 'fakeMovie';
    movieService.getRating = vi.fn().mockImplementationOnce(() => 4);

    // when
    const response = controller.getRating(movieName);

    // then
    expect(response).toBeDefined();
    expect(movieService.getRating).toHaveBeenCalledWith('fakeMovie');
    expect(response).toEqual(4);
  });
});
