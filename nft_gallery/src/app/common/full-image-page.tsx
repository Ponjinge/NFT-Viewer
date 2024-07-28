import { getImage } from "~/server/queries";

// we don't use params because it's not part of the route.
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center ">
      <div className="flex flex-shrink flex-grow p-4 justify-center">
        <img src={image.url} className=" object-contain max-h-96 max-w-full " alt={image.name} />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}
