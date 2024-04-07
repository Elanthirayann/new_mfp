import { mysqlTable, int, mysqlEnum } from 'drizzle-orm/mysql-core';
import { user } from './user';
import { manufacturingUnit } from './manufacturing-unit';
import { relations } from 'drizzle-orm';

export const worker = mysqlTable('Worker', {
  id: int("workerId").autoincrement().primaryKey(),
  userId: int("userId").references(() => user.id),
  unitId: int("unitId").references(() => manufacturingUnit.id),
  type: mysqlEnum('type', ["Employee", "Farmer", "Retailer"]),
})

export const workerRelations = relations(worker, ({ one }) => ({
  user: one(user),
  unit: one(manufacturingUnit),
}))
