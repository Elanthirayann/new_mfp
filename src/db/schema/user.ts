import { mysqlTable, int, mediumtext, text, mysqlEnum } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('User', {
  id: int("userId").autoincrement().primaryKey(),
  email: mediumtext("email").notNull(),
  password: text("password").notNull(),
  type: mysqlEnum('type', ["Ministry", "MFPAdmin", "MUAdmin", "Worker"])
});
