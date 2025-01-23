import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import { db } from '../drizzle/db';
@Injectable()
export class MovieGateway {

  async getMovie(movieName: string) {
    const db = drizzle(process.env.DATABASE_URL);
    const result = await db.execute('select 1');

  }
}
