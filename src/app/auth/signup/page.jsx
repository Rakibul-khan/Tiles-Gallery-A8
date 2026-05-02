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
import Link from "next/link";

import { useRouter } from "next/navigation";

import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;
    // console.log({ name, email, photourl, password });

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      image: photourl,
      password: password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Successfully signed up ");

      window.location.reload();
      redirect("/auth/signin");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  const handleSignUpGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="h-screen flex flex-col gap-6 justify-center items-center">
      <h1 className="font-semibold text-4xl text-center">Sign Up</h1>
      <Card className="p-10 w-[500px]">
        <Form
          className="flex  flex-col gap-4  rounded-xl"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          {/* name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Your Name" />
            <FieldError />
          </TextField>
          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Your Email" />
            <FieldError />
          </TextField>
          {/* photo url */}
          <TextField isRequired name="photourl" type="url">
            <Label>Photo URL</Label>
            <Input placeholder="Photo URL" />
            <FieldError />
          </TextField>
          {/* password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Sign Up
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
        <p className="text-center text-lg underline">or</p>
        <Button
          onClick={handleSignUpGoogle}
          className="w-full"
          variant="outline"
        >
          <FaGoogle></FaGoogle> Sign Up with Google
        </Button>
        <div className="text-center text-lg">
          <Link href={"/auth/signin"}>
            Already have an account?
            <span className="underline text-blue-500"> Login</span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
