import {
    boolean,
    integer,
    pgTable,
    pgTableCreator,
    serial,
    text,
    timestamp,
    index,
  } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `beaconprep_${name}`);

// Create a pgTable that maps to a table in your DB
export const donations = pgTable(
    'donations',
    {
      id: serial('id').primaryKey(),
      username: text('name').notNull(),
      email: text('email').notNull(),
      donation: integer('donation').notNull(),
      privacyPolicy: boolean('agreedPrivacyPolicy').notNull(),
      createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (example) => {
      return {
        nameIndex: index('name_idx').on(example.username),
      };
    },
  );