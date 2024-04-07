import { mysqlTable, int, text } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { ministry } from './ministry';
import { manufacturingUnit } from './manufacturing-unit';
import { worker } from './worker';
import { district } from './district';
import { state } from './state';

export const megaFoodPark = mysqlTable('MegaFoodPark', {
  id: int("megaFoodParkId").autoincrement().primaryKey(),
  name: text("name").notNull(),
  districtId: text("districtId").references(() => district.id),
  stateId: text("stateId").references(() => state.id),
})

export const foodParkRelations = relations(megaFoodPark, ({ one, many }) => ({
  ministry: one(ministry),
  state: one(state),
  district: one(district),
  units: many(manufacturingUnit),
  workers: many(worker),
}))
