import { mysqlTable, int } from 'drizzle-orm/mysql-core'
import { manufacturingUnit } from './manufacturing-unit'
import { user } from './user'
import { relations } from 'drizzle-orm';

export const muAdmin = mysqlTable('MUAdmin', {
  userId: int("userId").references(() => user.id),
  unitId: int("unitId").references(() => manufacturingUnit.id),
})

export const muAdminRelations = relations(muAdmin, ({ one }) => ({
  user: one(user),
  unit: one(manufacturingUnit),
}));
