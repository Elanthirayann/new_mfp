import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './index';

await migrate(db, {migrationsFolder: './src/db/migrations'});

await connection.end();

