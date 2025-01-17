import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import request from 'supertest';
import { mock } from 'pactum';

describe('movie aggregator', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await mock.start(3001);
  });
  beforeEach(async () => {
    mock.addInteraction({
      request: { method: 'GET', path: '/movies/batman' },
      response: {
        status: 200,
        body: {
          data: {
            meta: {
              releasedOn: '1999-10-12T10:15:46.752Z',
            },
            money: { made: 12, budget: 11 },
            rating: 8.8,
          },
        },
      },
    });
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterAll(async () => {
    await mock.stop();
  });

  it.only('given a movie name, gives oldness of the movie', async () => {
    const movieName = 'batman';
    const response = await request(app.getHttpServer()).get(
      `/movies/${movieName}/oldness`,
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.oldness).toBe('90s');
  });

  it.only('given a movie name, gives profitability of the movie', async () => {
    const movieName = 'batman';
    const response = await request(app.getHttpServer()).get(
      `/movies/${movieName}/profitability`,
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.profitability).toBe('PROFITABLE');
  });

  it.only('given a movie name, gives rating of the movie', async () => {
    const movieName = 'batman';
    const response = await request(app.getHttpServer()).get(
      `/movies/${movieName}/rating`,
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.rating).toBe(4.4);
  });
});
