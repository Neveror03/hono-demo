import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {prettyJSON} from 'hono/pretty-json'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use('*', prettyJSON())

app.get('/entry/:id', (c) => {
  const id = c.req.param('id')
  return c.json({
    'your id is' : id,
  })
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
