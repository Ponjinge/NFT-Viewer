import { Card } from "~/components/ui/card";
import { metadata } from "../layout";

// Function to convert IPFS URL to HTTP URL
function convertIpfsUrl(ipfsUrl) {
  return ipfsUrl.startsWith("ipfs://")
    ? ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/")
    : ipfsUrl;
}

export default async function FullPageImageView(props: { id:  number }) {
  let metadata;
  
  try {
    const response = await fetch(`https://ipfs.io/ipfs/bafybeibc5sgo2plmjkq2tzmhrn54bk3crhnc23zd2msg4ea7a4pxrkgfna/${props.id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch image data");
    }
    metadata = await response.json();
    // Convert the image URL if it's an IPFS link
    metadata.url = convertIpfsUrl(metadata.image);
  } catch (err) {
    console.error("Error fetching image data:", err);
    return <div>Error loading image data.</div>;
  }

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center p-4">
      <Card className="min-w-6 max-w-6xl">
        <div className="flex flex-col justify-center md:flex-row">
          <img
            src={metadata.url}
            className="max-h-[75vh] max-w-full object-contain p-2"
            alt={metadata.name}
          />
          <div className="flex h-full flex-shrink-0 flex-col border-l p-4">
            <div className="border-b p-2 text-center text-xl">{metadata.name}</div>
            <div className="p-2">
              <div>Id:</div>
              <div>{metadata.id}</div>
            </div>
           
          </div>
        </div>
      </Card>
    </div>
  );
}
