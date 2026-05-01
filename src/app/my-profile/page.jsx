import { auth } from "@/lib/auth";
import { Avatar, Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  //   console.log(session);
  return (
    <div className="flex flex-col justify-center items-center  h-[80vh] bg-gray-100 ">
      <h1 className="text-4xl font-semibold text-center py-6">My Profile</h1>
      <Card className="px-20 py-10 text-center">
        <Avatar className="mx-auto">
          <Avatar.Image alt={session?.user.name} src={session?.user.image} />
          <Avatar.Fallback>{session?.user.name[0]}</Avatar.Fallback>
        </Avatar>
        <h1 className="font-medium text-xl">{session?.user.name}</h1>
        <p className="text-center text-lg">{session?.user.email}</p>
        <Link href={"/update-profile"}>
          <Button variant="outline">Update Profile</Button>
        </Link>
      </Card>
    </div>
  );
};

export default MyProfilePage;
