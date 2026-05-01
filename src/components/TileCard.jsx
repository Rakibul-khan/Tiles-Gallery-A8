import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";

const TileCard = ({ tile }) => {
  return (
    <Card className="w-[400px] ">
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
        <Card.Description>{tile.description}</Card.Description>
      </Card.Header>
      <Button className="w-full" variant="outline">
        View Details
      </Button>
    </Card>
  );
};

export default TileCard;
