import { mysqlTable, int, text } from 'drizzle-orm/mysql-core';
import { state } from './state';
import { relations } from 'drizzle-orm';
import { megaFoodPark } from './food-park';

export const district = mysqlTable('District', {
  id: int("districtId").autoincrement().primaryKey(),
  name: text("name").notNull(),
  stateId: text("stateId").references(() => state.id),
})

export const districtRelations = relations(district, ({ one, many }) => ({
  state: one(state, { fields: [district.stateId], references: [state.id] }),
  foodParks: many(megaFoodPark)
}))
