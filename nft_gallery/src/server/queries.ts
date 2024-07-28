import "server-only";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { posts } from "./db/schema";

export async function getImage(id: number) {
// Using findFirst instead of findOne avoids 'any' type errors
  const post = await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!post) throw new Error(`Image with id ${id} not found`);

  return post;
}
