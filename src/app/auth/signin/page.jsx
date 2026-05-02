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
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      toast.success("logged in Successfully");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  const handleSignInGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Card className="p-10">
        <h1 className="font-semibold text-4xl text-center mb-5">Sign In</h1>
        <Form className="flex w-96 flex-col gap-4 " onSubmit={onSubmit}>
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
            <Input placeholder="Enter Your Email" />
            <FieldError />
          </TextField>
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
              Login
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
        <p className="text-center  font-medium underline">or</p>
        <Button
          onClick={handleSignInGoogle}
          variant="outline"
          className="w-full text-lg "
        >
          <FaGoogle /> Sign in with Google
        </Button>
        <div className="text-center text-lg">
          <Link href={"/auth/signup"}>
            New here? <span className="underline text-blue-400">Register</span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
