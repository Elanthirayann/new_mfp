import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import { user } from './schema/user';
import { ministry } from './schema/ministry';
import { mfpAdmin } from './schema/mfp-admin';
import { muAdmin } from './schema/mu-admin';
import { worker } from './schema/worker';
import { manufacturingUnit } from './schema/manufacturing-unit';
import { megaFoodPark } from './schema/food-park';
import { state } from './schema/state';
import { district } from './schema/district';

const schema = {
  user,
  ministry,
  mfpAdmin,
  muAdmin,
  worker,
  manufacturingUnit,
  megaFoodPark,
  state,
  district,
};

export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

export const db = drizzle(connection, { schema, mode: "default" });
