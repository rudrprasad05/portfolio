"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useSession } from "@/hooks/useSessionContext";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Page = () => {
  const router = useRouter();
  const [state, setState] = useState<"LOADING" | "IDLE">("IDLE");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const { login, session } = useSession();

  const onSubmit = async (data: LoginFormValues) => {
    setState("LOADING");
    try {
      login(data).then(() => setState("IDLE"));
    } catch (err) {
      console.error("Unexpected error:", err);
      setState("IDLE");
    }
  };

  return (
    <div className="w-full h-full grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full px-48"
      >
        <div>
          <h1 className="text-xl">Login</h1>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            //   type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          Dont have an account?{" "}
          <Link
            className={
              "text-secondary-foreground/70 underline-offset-4 hover:underline"
            }
            href="/auth/register"
          >
            Register here
          </Link>
        </div>

        <Button
          type="submit"
          className="flex gap-2"
          disabled={state == "LOADING"}
        >
          {state == "LOADING" && <Loader2 className={"animate-spin mr-3"} />}
          Login
        </Button>
      </form>
    </div>
  );
};

export default Page;
