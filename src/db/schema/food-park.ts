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
  toalLandArea: int("totalLandArea").notNull(),
  totalLeasableArea: int("totalLeasableArea").notNull(),
  totalVacantArea: int("totalVacantArea").notNull(),
  districtId: int("districtId").references(() => district.id),
  stateId: int("stateId").references(() => state.id),
})

export const foodParkRelations = relations(megaFoodPark, ({ one, many }) => ({
  ministry: one(ministry),
  state: one(state, {fields: [megaFoodPark.stateId], references: [state.id]}),
  district: one(district, {fields: [megaFoodPark.districtId], references: [district.id]}),
  units: many(manufacturingUnit),
  workers: many(worker),
}))
