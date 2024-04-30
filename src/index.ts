import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import pages from './pages/routes'
import apis from './api/index'
import { logger } from 'hono/logger'

type Variables = {
  user: {
    username: string
    role: string
  }
}

const app = new Hono<{Variables: Variables}>()
app.use(logger())

app.route('/', pages)
app.route('/api', apis)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
