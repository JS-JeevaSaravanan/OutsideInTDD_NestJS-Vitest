import { Injectable } from '@nestjs/common';

@Injectable()
export class Movie2Service {
  async getOldness(movieName: string): Promise<{ oldness: string }> {
    throw new Error('Not implemented');
  }
}
