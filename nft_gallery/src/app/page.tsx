import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

// Make the page dynamic
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // This is a server-side function, it will not be run on the client (console.log will not show up in the browser)
  const posts = await db.query.posts.findMany({
    // Order the posts by id in descending order
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
            <Link href={`/photos/${post.id}`}>
              <Image src={post.url} alt={post.name} width={480} height={200} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-10">Gallery under construction</div>
    </main>
  );
}
