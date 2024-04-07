import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { worker } from "./worker";
import { megaFoodPark } from "./food-park";

export const manufacturingUnit = mysqlTable('ManufacturingUnit', {
  id: int("unitId").autoincrement().primaryKey(),
  foodParkId: int("megaFoodParkId").references(() => megaFoodPark.id),
})

export const unitRelations = relations(manufacturingUnit, ({ one, many }) => ({
  foodPark: one(megaFoodPark),
  workers: many(worker),
}))
