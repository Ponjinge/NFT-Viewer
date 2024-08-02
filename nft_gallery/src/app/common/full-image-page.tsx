import { getImage } from "~/server/queries";
import { Card } from "~/components/ui/card";

// we don't use params because it's not part of the route.
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center p-4">
      <Card className="min-w-6 max-w-6xl">
        <div className="flex flex-col justify-center md:flex-row">
          <img
            src={image.url}
            className="max-h-[75vh] max-w-full object-contain p-2"
            alt={image.name}
          />
          <div className="flex h-full flex-shrink-0 flex-col border-l p-4">
            
            <div className="border-b p-2 text-center text-xl">{image.name}</div>
            <div className="p-2">
              <div>Id: </div>
              <div>{image.id}</div>
            </div>
            <div className="p-2">
              <div>Created On:</div>
              <div>{new Date(image.createdAt).toLocaleDateString()}</div>
            </div>
            <div className="p-2">
              <div>Created By:</div>
              <div>{image.artist}</div>
            </div>
            <div className="p-2">
              <div>Year:</div>
              <div>{image.year}</div>
            </div>
            <div className="p-2">
              <div>Description:</div>
              <div>{image.description}</div>
            </div>
            <div className="p-2">
              <div>Type:</div>
              <div>{image.mediatype}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
