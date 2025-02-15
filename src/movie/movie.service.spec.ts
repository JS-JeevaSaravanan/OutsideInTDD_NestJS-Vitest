import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';

import { vi } from 'vitest';
import { MovieGateway } from './movie.gateway';

describe('MovieService', () => {
  let service: MovieService;
  let gateway: MovieGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: MovieGateway,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<MovieService>(MovieService);
    gateway = module.get(MovieGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('given a movie name, it should call the movie gateway', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          meta: {
            releasedOn: '2018-10-12T10:15:46.752Z',
          },
        },
      }),
    );

    // when
    const response = await service.getOldness(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
  });
  it('should identify new movie', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          meta: {
            releasedOn: '2018-10-12T10:15:46.752Z',
          },
        },
      }),
    );

    // when
    const response = await service.getOldness(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.oldness).toEqual('new');
  });
  it('should identify old movie', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          meta: {
            releasedOn: '1989-10-12T10:15:46.752Z',
          },
        },
      }),
    );

    // when
    const response = await service.getOldness(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.oldness).toEqual('old');
  });
  it('should identify 90s movie', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          meta: {
            releasedOn: '1999-10-12T10:15:46.752Z',
          },
        },
      }),
    );

    // when
    const response = await service.getOldness(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.oldness).toEqual('90s');
  });

  it('should identify profitable movie', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          money: {
            made: 10,
            budget: 5,
          },
        },
      }),
    );

    // when
    const response = await service.getProfitability(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.profitability).toEqual('PROFITABLE');
  });

  it('should identify NON-PROFITABLE movie', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          money: {
            made: 5,
            budget: 10,
          },
        },
      }),
    );

    // when
    const response = await service.getProfitability(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.profitability).toEqual('NON-PROFITABLE');
  });

  it('should identify BLOCKBUSTER movie', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          money: {
            made: 200,
            budget: 10,
          },
        },
      }),
    );

    // when
    const response = await service.getProfitability(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.profitability).toEqual('BLOCKBUSTER');
  });

  it('should get rating', async () => {
    // given
    const movieName = 'fake';
    gateway.getMovie = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          rating: 4,
        },
      }),
    );

    // when
    const response = await service.getRating(movieName);

    // then
    expect(gateway.getMovie).toHaveBeenCalledWith('fake');
    expect(response.rating).toEqual(2);
  });
});
