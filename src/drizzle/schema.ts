import {
  pgTable,
  serial,
  varchar,
  date,
  numeric,
  integer,
} from 'drizzle-orm/pg-core';

export const moviesTable = pgTable('movies', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  releasedOn: date('released_on').notNull(),
  director: varchar('director', { length: 255 }).notNull(),
  budget: numeric('budget', { precision: 12, scale: 2 }).notNull(),
  made: numeric('made', { precision: 12, scale: 2 }).notNull(),
  rating: integer('rating').notNull(),
});
