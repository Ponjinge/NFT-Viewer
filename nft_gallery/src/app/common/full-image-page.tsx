import { getImage } from "~/server/queries";
// we don't use params because it's not part of the route.
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center">
      <div className="flex flex-shrink flex-grow justify-center p-4">
        <img
          src={image.url}
          className="max-h-[750px] max-w-full object-contain"
          alt={image.name}
        />
      </div>
      <div className="flex h-full flex-shrink-0 flex-col border-l">
        <div className="flex border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
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
  );
}
