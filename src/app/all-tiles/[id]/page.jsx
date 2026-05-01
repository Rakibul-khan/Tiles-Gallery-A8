import Image from "next/image";

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;
  const getTiles = async () => {
    const res = await fetch(`http://localhost:5000/tiles/${id}`);
    return await res.json();
  };
  const tile = await getTiles();

  return (
    <div className="w-11/12 mx-auto mt-15 bg-gray-100 p-6 rounded-lg flex gap-7 space-y-3">
      <div className="flex-1">
        <Image
          className="rounded-lg"
          width={"700"}
          height={"400"}
          alt={tile.title}
          src={tile.image}
        ></Image>
      </div>
      <div className="flex-1">
        <h1 className="font-semibold text-4xl">{tile.title}</h1>
        <p className="text-lg text-gray-500  mt-3">{tile.description}</p>
        <div className="flex justify-between items-center font-medium mt-3 text-lg">
          <span>Price : {tile.price}</span>
          <span>Currency : {tile.currency}</span>
        </div>
        <div className="flex justify-between items-center  py-10">
          <p>
            <span className="font-medium text-lg">Category :</span>
            <span className="font-medium text-gray-600 text-lg">
              {" "}
              {tile.category}
            </span>
          </p>
          <p>
            {" "}
            <span className="font-medium text-lg">Material :</span>{" "}
            <span className="font-medium text-lg text-gray-500">
              {tile.material}
            </span>
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="font-medium text-lg">Dimensions : </span>
            <span className="font-medium text-lg text-gray-500">
              {tile.dimensions}
            </span>
          </div>
          <div className="">
            <span className="font-medium text-lg">InStock : </span>
            <span className="font-medium text-lg text-gray-500">
              {tile.inStock ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;
