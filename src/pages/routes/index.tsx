import { Hono } from 'hono'
import MinistryDashboard from '../components/MinistryDashboard'
import MFPAdminPage from '../components/MFPAdminPage'
import MUAdminPage from '../components/MUAdminPage'
import WorkerPage from '../components/WorkerPage'

const pages = new Hono()

pages.get("/ministry", c => c.html(<MinistryDashboard />))
pages.get("/mfpadmin", c => c.html(<MFPAdminPage />))
pages.get("/muadmin", c => c.html(<MUAdminPage />))
pages.get("/worker", c => c.html(<WorkerPage />))

export default pages
