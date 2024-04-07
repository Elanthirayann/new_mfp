import { mysqlTable, text, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { district } from './district';
import { megaFoodPark } from './food-park';

export const state = mysqlTable('State', {
  id: int("stateId").autoincrement().primaryKey(),
  name: text("name").notNull(),
})

export const stateRelations = relations(state, ({ many }) => ({
  districts: many(district),
  foodParks: many(megaFoodPark),
}))
