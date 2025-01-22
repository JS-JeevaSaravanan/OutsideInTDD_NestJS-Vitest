import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import request from 'supertest';
import { mock } from 'pactum';

describe('movie aggregator 2', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await mock.start(3003);
  });
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterAll(async () => {
    await mock.stop();
  });

  it.only("test movie's oldness", async () => {
    const movieName = 'batman';
    const response = await request(app.getHttpServer()).get(
      `/movies2/${movieName}/oldness`,
    );

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.oldness).toBe('90s');
  });
});
