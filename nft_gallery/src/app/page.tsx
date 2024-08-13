import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../components/ui/card";

// Make the page dynamic
export const dynamic = "force-dynamic";

// Convert IPFS URL to HTTP URL
function convertIpfsUrl(ipfsUrl) {
  return ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
}

export default async function HomePage() {
  const baseLink = "https://ipfs.io/ipfs/bafybeibc5sgo2plmjkq2tzmhrn54bk3crhnc23zd2msg4ea7a4pxrkgfna/";
  //const baseLink = "https://ipfs.io/ipfs/QmaxEUs9LWYzJRWVwCe5G4m4DZzRoA7Ezvs7QkGmTR17fM/";
  const allMetadata = [];

  for (let id = 1; id <= 80; id++) {
    const link = `${baseLink}${id}`;
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error(`Failed to fetch metadata for ID: ${id}`);
      }
      const metadata = await response.json();
      allMetadata.push(metadata);
    } catch (error) {
      console.error(`Error fetching metadata for ID ${id}:`, error);
      // Optionally, handle the error by pushing a placeholder or skipping this ID
    }
  }

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4 mt-1">
        {allMetadata.map((metadata, index) => (
          <div key={index} className="w-48">
            <Link href={`/photos/${index + 1}`}>
              <Card className="w-auto p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
                <CardContent>
                  
                  <img
                     src={convertIpfsUrl(metadata.image)}
                    alt={metadata.name}
                    width={480}
                    height={200}
                    
                  />
                  <p className="text-xs">#{index + 1}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {metadata.name}
                </CardFooter>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-10">Gallery under construction</div>
    </main>
  );
}
