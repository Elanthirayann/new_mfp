import { Hono } from 'hono'
import MinistryDashboard from '../components/MinistryDashboard'
import MFPAdminPage from '../components/MFPAdminPage'
import MUAdminPage from '../components/MUAdminPage'
import WorkerPage from '../components/WorkerPage'
import { basicAuth } from 'hono/basic-auth'

type Variables = {
     user: {
          username: string
          role: string
     }
}

const pages = new Hono<{ Variables: Variables }>()

pages.get("/", c => {
     return c.html(<div>
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

export default pages
