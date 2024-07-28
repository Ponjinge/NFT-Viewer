import { getImage } from "~/server/queries";

// we don't use params because it's not part of the route.
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">

      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt="img" className="w-96 object-contain " />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
        <p>{image.createdAt.toString()}</p>
      </div>
    </div>
  );
}
