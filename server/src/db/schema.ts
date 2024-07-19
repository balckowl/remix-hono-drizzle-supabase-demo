import { pgTable, serial, text, uuid, timestamp, pgEnum, integer, boolean, json, primaryKey } from "drizzle-orm/pg-core"
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm"

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),

  author: text("author").notNull(), // 作成者
  title: text("title").notNull(), // タイトル
  content: text("content").notNull(), // 説明

  created_at: timestamp("created_at").notNull().defaultNow(), // 作成日時
})