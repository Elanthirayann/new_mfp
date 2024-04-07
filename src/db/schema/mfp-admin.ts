import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { megaFoodPark } from "./food-park";
import { user } from "./user";
import { relations } from "drizzle-orm";

export const mfpAdmin = mysqlTable('MFPAdmin', {
  userId: int("userId").references(() => user.id),
  megaFoodParkId: int("megaFoodParkId").references(() => megaFoodPark.id),
})

export const mfpAdminRelations = relations(mfpAdmin, ({ one }) => ({
  user: one(user),
  foodPark: one(megaFoodPark),
}))
