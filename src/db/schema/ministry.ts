import { mysqlTable, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { user } from './user';
import { megaFoodPark } from './food-park';

export const ministry = mysqlTable('Ministry', {
  id: int("ministryId").autoincrement().primaryKey(),
  userId: int("userId").references(() => user.id),
});

export const ministryRelations = relations(ministry, ({ many }) => ({
  foodParks: many(megaFoodPark),
}))
