import { Hono } from 'hono'
import db from './db'
import { blogs } from './db/schema'
import { eq } from "drizzle-orm"

const app = new Hono()

//取得するapi
app.get('/api/post', async (c) => {

  const alBlogs = await db.select().from(blogs)

  return c.json(alBlogs)
})


//投稿するapi
app.post('/api/post', async (c) => {

  const body = await c.req.json()

  console.log(body)

  const { author, title, content } = body

  const post = await db.insert(blogs).values({
    author: author,
    title: title,
    content: content
  }).returning()

  return c.json( post )
})

//投稿の詳細取得のapi
app.get('/api/post/:id', async (c) => {
  const id = c.req.param("id")

  if(typeof(id) == "string"){
    return c.json([])
  }

  const selectBlog = await db.select().from(blogs).where(eq(blogs.id, Number(id)))

  if (selectBlog.length == 0) {
    return c.json([])
  }
  
  return c.json(selectBlog)
})

export default app
