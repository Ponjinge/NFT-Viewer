import { getImage } from "~/server/queries";

// we don't use params because it's not part of the route.
export default  async function FullPageImageView( props: { id: number }) {
  const image = await getImage(props.id);
  return (
  
  <div className="flex h-full w-full min-w-0 bg-green-600">
    <img src={image.url} className=" flex-shrink object-contain" />
    <div className="flex w-48 flex-col">
      <div className="text-xl font-bold">
      <h1>{image.name}</h1>
      <p>{image.createdAt.toString()}</p>
        </div>
    </div>
  </div>
    
  );
}