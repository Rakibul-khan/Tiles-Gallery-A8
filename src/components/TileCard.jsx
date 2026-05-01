import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";
import LinkTag from "next/link";

const TileCard = ({ tile }) => {
  return (
    <Card className=" ">
      <Card.Header>
        <Image
          className="rounded-lg"
          src={tile.image}
          width="500"
          height={"200"}
          alt={tile.title}
          sizes="100vw"
        ></Image>
        <Card.Title className="text-xl mt-2">{tile.title}</Card.Title>
      </Card.Header>
      <LinkTag href={`/all-tiles/${tile.id}`}>
        <Button
          className="w-full bg-blue-500 text-white py-5"
          variant="outline"
        >
          View Details
        </Button>
      </LinkTag>
    </Card>
  );
};

export default TileCard;
