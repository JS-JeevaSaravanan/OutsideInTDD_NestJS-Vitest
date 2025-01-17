import { Test, TestingModule } from '@nestjs/testing';
import { MovieGateway } from './movie.gateway';
import { HttpService } from '@nestjs/axios';
import { type DeepMockProxy, mockDeep } from 'vitest-mock-extended';
import type { AxiosResponse } from 'axios';
import { of } from 'rxjs';

describe('MovieGateway', () => {
  let gateway: MovieGateway;
  let httpService: DeepMockProxy<HttpService>;

  beforeEach(async () => {
    httpService = mockDeep<HttpService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieGateway,
        {
          provide: HttpService,
          useValue: httpService,
        },
      ],
    }).compile();

    gateway = module.get<MovieGateway>(MovieGateway);
  });

  it('given a movie name, it should call the http api', async () => {
    // given
    const movieName = 'fake';
    const mockResponse: AxiosResponse = {
      data: {},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: {} as any,
      },
    };

    httpService.get.mockReturnValue(of(mockResponse));

    // when
    const response = await gateway.getMovie(movieName);

    // then
    expect(response).toBeDefined();
    expect(httpService.get).toHaveBeenCalledWith(
      'http://localhost:3001/movies/fake',
    );
    expect(response).toEqual({});
  });

  afterEach(() => {
    httpService = null;
    gateway = null;
  });
});
