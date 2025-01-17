import { Injectable } from '@nestjs/common';
import { MovieGateway } from './movie.gateway';
import { parseISO } from 'date-fns';

//! ToDo: Implement types for the return values

@Injectable()
export class MovieService {
  constructor(private gateway: MovieGateway) {}

  async getOldness(movieName: string): Promise<{ oldness: string }> {
    let movie = await this.gateway.getMovie(movieName);
    const date = this.parse(movie);
    if (date.getFullYear() < 1990) {
      return { oldness: 'old' };
    } else if (date.getFullYear() < 2000) {
      return { oldness: '90s' };
    }
    return { oldness: 'new' };
  }

  async getProfitability(
    movieName: string,
  ): Promise<{ profitability: string }> {
    let {
      data: {
        money: { made, budget },
      },
    } = await this.gateway.getMovie(movieName);

    const profit = made - budget;
    if (profit > 100) {
      return { profitability: 'BLOCKBUSTER' };
    } else if (profit > 0) {
      return { profitability: 'PROFITABLE' };
    } else {
      return { profitability: 'NON-PROFITABLE' };
    }
  }

  private parse(movie) {
    const date = parseISO(movie.data.meta.releasedOn);
    return date;
  }
}
