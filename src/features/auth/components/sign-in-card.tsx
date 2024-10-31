import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

const SignInCard = ({ setState }: SignInCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className='w-full h-full p-8'>
      <CardHeader>
        Login to Continue
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-5 px-0 pb-0'>
        <form className='space-y-2.5'>
          <Input
            disabled={false}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
            type='email'
            required
          />
          <Input
            disabled={false}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
            type='password'
            required
          />
          <Button type='submit' className='w-full' size={"lg"} disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className='flex flex-col gap-y-2.5'>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className='w-full relative'
          >
            <FcGoogle />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className='w-full relative'
          >
            <FaGithub />
            Continue with Github
          </Button>
        </div>
        <p className='text-xs text-muted-foreground'>
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setState("signUp")}
            className='text-sky-700 hover:underline cursor-pointer'
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
