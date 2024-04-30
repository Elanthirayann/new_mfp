import { Hono } from 'hono'
import MinistryDashboard from '../components/MinistryDashboard'
import MFPAdminPage from '../components/MFPAdminPage'
import MUAdminPage from '../components/MUAdminPage'
import WorkerPage from '../components/WorkerPage'
import { basicAuth } from 'hono/basic-auth'
import { megaFoodPark } from '../../db/schema/food-park'
import { db } from '../../db'
import { district } from '../../db/schema/district'
import { eq } from 'drizzle-orm'
import { state } from '../../db/schema/state'

type Variables = {
     user: {
          id: string
          username: string
          role: string
     }
}

const pages = new Hono<{ Variables: Variables }>()

pages.get("/", c => {
     return c.html(
          <div>
               <a href="/ministry">Ministry</a>
               <a href="/mfpadmin">MFP Admin</a>
               <a href="/muadmin">MU Admin</a>
               <a href="/worker">Worker</a>
          </div>
     )
})

pages.get("/logout", c => {
     c.header("Authorization", "Basic logout")
     return c.text("Logged out")
})

pages.get("/ministry",
     basicAuth({
          username: "ministry",
          password: "ministry"
     }),
     c => c.html(<MinistryDashboard />)
)

pages.get("/mfpadmin", c => c.html(<MFPAdminPage />))
pages.get("/muadmin", c => c.html(<MUAdminPage />))
pages.get("/worker", c => c.html(<WorkerPage />))


pages.get("/view/foodparks", async c => {
     const data = await db
          .select({
               name: megaFoodPark.name,
               toalLandArea: megaFoodPark.toalLandArea,
               totalVacantArea: megaFoodPark.totalVacantArea,
               totalLeasableArea: megaFoodPark.totalLeasableArea,
          }).from(megaFoodPark)

     return c.html(
          <table class="space-y-2">
               <thead>
                    <tr class="p-2">
                         <th class="p-2">Name</th>
                         <th class="p-2">Total</th>
                         <th class="p-2">Vacant</th>
                         <th class="p-2">Leasable</th>
                    </tr>
               </thead>
               {data.map(foodPark => {
                    return <tr class="p-2">
                         <td>{foodPark.name}</td>
                         <td>{foodPark.toalLandArea}</td>
                         <td>{foodPark.totalVacantArea}</td>
                         <td>{foodPark.totalLeasableArea}</td>
                    </tr>
               })}     
          </table>
     )
})

export default pages
