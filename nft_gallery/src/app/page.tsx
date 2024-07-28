import Link from "next/link";
import { Key } from "react";
import { db } from "~/server/db";


const mockUrls = [
  
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3e1ab638-b766-4cbc-95e3-7138984e02ef-n23chc.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f1b63725-e52a-4caa-bda3-cd3e7b93ec87-j3p0nh.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/bec58918-cbba-482b-92f6-bbbc2802ded9-48p68b.jpg",
  "https://utfs.io/f/cb619dcc-b38f-4ba4-aa25-a20043ce49b9-4yz4fm.jpg",
  
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1, 
  url,
}));

export default async function HomePage() {

  // This is a server-side function, it will not be run on the client (console.log will not show up in the browser)
  const posts = await db.query.posts.findMany();
  

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id} className="w-48">
              {post.name}
            </div>
          ))
        }
        {
        mockImages.map((image: { id: Key | null | undefined; url: string | undefined; }) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))
      }</div> 
      Gallery under construction
    </main>
  );
}
