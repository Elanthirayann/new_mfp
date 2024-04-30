import { Hono } from "hono";
import { db } from "../db";
import { megaFoodPark } from "../db/schema/food-park";

const apis = new Hono()

apis.post("/create-mfp", async c => {
  console.log("Creating MFP")
  const data = await c.req.formData()
  const name = data.get("name") as string
  const district = +(data.get("district") ?? 0)
  const state = +(data.get("state") ?? 0)
  const land = +(data.get("land") ?? 0)
  const leasable = +(data.get("leasable") ?? 0)
  const vacant = +(data.get("vacant") ?? 0)
  await db.insert(megaFoodPark).values({
    name: name,
    districtId: district,
    stateId: state,
    toalLandArea: land,
    totalVacantArea: vacant,
    totalLeasableArea: leasable
  }).then(() => {
    console.log("MFP Created")
  }).catch(err => {
    console.error(err)
    c.status(500)
    return c.html(<div class="text-red-400">Error Creating MFP</div>)
  })
  return c.html(<div class="text-green-400">MFP Created</div>)
})

export default apis
