"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    const data = await authClient.updateUser({
      name,
      photoUrl,
    });
    if (data) {
      router.push("/my-profile");
    }
  };
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h2 className="text-4xl font-semibold text-center py-6">
          Update Profile
        </h2>
        <Card className="md:py-10">
          <Form
            className="flex w-70 md:w-96 flex-col gap-4 p-6 md:p-0"
            onSubmit={onSubmit}
          >
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input placeholder="Your Name" />
              <FieldError />
            </TextField>
            <TextField isRequired minLength={8} name="photourl" type="url">
              <Label>Photo URL</Label>
              <Input placeholder="Photo URL" />

              <FieldError />
            </TextField>
            <div>
              <Button className={"w-full"} type="submit">
                <Check />
                Update
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default UpdateProfile;
